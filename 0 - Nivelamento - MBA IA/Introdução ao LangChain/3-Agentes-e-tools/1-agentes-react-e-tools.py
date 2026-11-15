from dotenv import load_dotenv
from langchain_classic.agents import AgentExecutor, create_react_agent
from langchain_core.prompts import PromptTemplate
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI

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


llm = ChatOpenAI(model="gpt-5-mini", disable_streaming=True)
tools = [calculator, web_search_mock]

prompt = PromptTemplate.from_template(
    """
Answer the following questions as best you can. You have access to the following tools.
Only use the information you get from the tools, even if you know the answer.
If the information is not provided by the tools, say you don't know.

{tools}

Use the following format:

Question: the input question you must answer
Thought: you should always think about what to do
Action: the action to take, should be one of [{tool_names}]
Action Input: the input to the action
Observation: the result of the action

... (this Thought/Action/Action Input/Observation can repeat N times)
Thought: I now know the final answer
Final Answer: The value returned of the tool


Rules:
- If you choose an Action, do NOT include Final Answer in the same step.
- After Action and Action Input, stop and wait for Observation.
- Never search the internet. Only use the tools provided.

Begin!

Question: {input}
Thought:{agent_scratchpad}"""
)

agent_chain = create_react_agent(llm, tools, prompt, stop_sequence=False)

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
    handle_parsing_errors="invalid format. Either provide an Action with Input, or a final answer only.",
    max_iterations=3,
)

print(agent_executor.invoke({"input": "What is the capital of Iran?"}))
# print()
# print(agent_executor.invoke({"input": "What is the capital of France?"}))
# print()
# print(agent_executor.invoke({"input": "How much is 10 + 10?"}))
# print()
