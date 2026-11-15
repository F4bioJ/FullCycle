from langchain_core.prompts import PromptTemplate

prompt_template = PromptTemplate(
    input_variables=["name"],
    template="Hi! I´m {name}. Tell-me a joke with my name"
)

text = prompt_template.format(name="Fabio")
print(text)