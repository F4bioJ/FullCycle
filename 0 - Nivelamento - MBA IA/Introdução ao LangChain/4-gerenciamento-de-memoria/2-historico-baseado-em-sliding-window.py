from dotenv import load_dotenv
from langchain_core.chat_history import InMemoryChatMessageHistory
from langchain_core.messages import trim_messages
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.runnables import RunnableLambda
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_openai import ChatOpenAI

load_dotenv()

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "You are a helpful assistant."),
        MessagesPlaceholder(variable_name="history"),
        ("human", "{input}"),
    ]
)

llm = ChatOpenAI(model="gpt-5-nano", temperature=0.9)


# define a slidding window (controla o que entra e sai da memoria do modelo)
def prepare_inputs(payload: dict) -> dict:
    # pega o conteudo de todas as mensagens
    raw_history = payload.get("raw_history", [])

    # define o trimmer
    trimmed = trim_messages(
        raw_history,  # historico
        token_counter=len,  # estratégia de quantidade de mensagens (poderia ser tokens)
        max_tokens=4,  # apesar do nome ser max_tokens, conta a quantidade de mensagens
        strategy="last",  # das últimas para as primeiras
        start_on="human",  # inicia a contagem sempre com uma mensagem de humano
        include_system=True,  # garante que o prompt inicial sempre apareça
        allow_partial=False,  # sem mensagens parciais
    )
    return {"input": payload.get("input", ""), "history": trimmed}


# transforma a prepare_inputs num runnable
prepare = RunnableLambda(prepare_inputs)

chain = prepare | prompt | llm

# gerenciamento da sessão. recebe um dicionário e uma string, mais a memoria
session_store: dict[str, InMemoryChatMessageHistory] = {}


# função pra pegar o historico da sessão
def get_session_history(session_id: str) -> InMemoryChatMessageHistory:
    if session_id not in session_store:
        session_store[session_id] = InMemoryChatMessageHistory()
    return session_store[session_id]


# runnable chain
conversational_chain = RunnableWithMessageHistory(
    chain,
    get_session_history,
    input_messages_key="input",
    history_messages_key="raw_history",
)

config = {"configurable": {"session_id": "demo-session"}}

print()
resp1 = conversational_chain.invoke(
    {"input": "Hello! it´s hot today!"},
    config=config,
)
print("Assistant:", resp1.content)
print("-" * 50)

resp2 = conversational_chain.invoke(
    {"input": "My name is Fabio. Reply only with 'OK' and do not mention my name."},
    config=config,
)
print("Assistant:", resp2.content)
print("-" * 50)

resp3 = conversational_chain.invoke(
    {"input": "Tell me a one-sentence fun fact. Do not mention my name."}, config=config
)
print("Assistant:", resp3.content)
print("-" * 50)

resp4 = conversational_chain.invoke({"input": "What is my name?"}, config=config)
print("Assistant:", resp4.content)
print("-" * 50)
