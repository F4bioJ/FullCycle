from dotenv import load_dotenv
from langchain_classic import hub
from langchain_classic.agents import AgentExecutor, create_react_agent
from langchain_core.prompts import PromptTemplate
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI
from langsmith import Client

load_dotenv()


@tool("calculator", return_direct=True)
def calculator(expression: str) -> str:
    """Evaluate a simple mathematical expression and return the result."""
    try:
        result = eval(expression)
    except Exception as e:
        return f"Error: {e}"
    return str(result)


@tool("web_search_mock")
def web_search_mock(query: str) -> str:
    """Mocked web search tool. Returns a hardcoded result."""

    data = {
        "Brazil": "Brasília",
        "France": "Paris",
        "Germany": "Berlin",
        "Italy": "Rome",
        "Spain": "Madrid",
        "United States": "Washington, D.C.",
    }

    for country, capital in data.items():
        if country.lower() in query.lower():
            return f"The capital of {country} is {capital}."
    return "\nI don't know the capital of that country"


llm = ChatOpenAI(model="gpt-4o-mini", disable_streaming=True)
# llm = ChatOpenAI(model="gpt-4.1-mini", disable_streaming=True)
# llm = ChatOpenAI(model="gpt-5-nano", disable_streaming=True)

tools = [calculator, web_search_mock]

# prompt = hub.pull("hwchase17/react")
prompt = Client().pull_prompt("hwchase17/react", dangerously_pull_public_prompt=True)

REGRAS = (
    "Rules:\n"
    "- Answer ONLY with information that appears in an Observation returned by a tool.\n"
    "- Never use your own knowledge or training data.\n"
    "- If the tool says it doesn't know, the Final Answer must be \"I don't know\".\n\n"
    "- Your last line must always start exactly with 'Final Answer:'.\n"
)

prompt = PromptTemplate.from_template(REGRAS + prompt.template)

agent_chain = create_react_agent(llm, tools, prompt, stop_sequence=True)
# agent_chain = create_react_agent(llm, tools, prompt, stop_sequence=False)

# usando from_agent_and_tools em vez de construtor (não verifica nomes dos argumentos)
# agent_executor = AgentExecutor.from_agent_and_tools(
#    agent=agent_chain,
#    tools=tools,
#    verbose=False,
#    handle_parsing_errors=True,
#   max_iterations=3,
# )

# usando construtor (verifica nomes dos argumentos)
agent_executor = AgentExecutor(
    agent=agent_chain,
    tools=tools,
    verbose=True,
    # handle_parsing_errors=True,
    handle_parsing_errors=(
        "Invalid format. Your reply must be EITHER:\n"
        "Action: <tool name>\nAction Input: <input>\n"
        "OR a single line starting exactly with:\n"
        "Final Answer: <your answer>"
    ),
    max_iterations=5,
)

print(agent_executor.invoke({"input": "What is the capital of Iran?"}))
# print()
# print(agent_executor.invoke({"input": "What is the capital of France?"}))
# print()
# print(agent_executor.invoke({"input": "How much is 10 + 10?"}))
# print()
