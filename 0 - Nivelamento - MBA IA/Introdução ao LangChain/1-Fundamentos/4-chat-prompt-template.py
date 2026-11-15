from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
load_dotenv()

system = ("system", "You are an assistant that answers questions in a {style} style. Answer in pt-br")
user = ("user", "{question}")

chat_prompt = ChatPromptTemplate([system, user])
messages = chat_prompt.format_messages(style="funny", question="Who is Superman?")

for message in messages:
    print(f"{message.type}: {message.content}")
    
model = ChatOpenAI(model="gpt-5-mini", temperature=0.7)
result = model.invoke(messages)
print(result.text)