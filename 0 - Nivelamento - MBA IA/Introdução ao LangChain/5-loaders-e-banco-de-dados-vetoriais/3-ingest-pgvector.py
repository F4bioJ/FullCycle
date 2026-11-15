import os
from pathlib import Path

from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_core.documents import Document
from langchain_openai import OpenAIEmbeddings
from langchain_postgres import PGVector
from langchain_text_splitters import RecursiveCharacterTextSplitter
from openai.types import embedding

load_dotenv()

# Testa existência das chaves necessárias no dotenv
for k in ("OPENAI_API_KEY", "PGVECTOR_URL", "PGVECTOR_COLLECTION"):
    if not os.getenv(k):
        raise RuntimeError(f"Environment variable {k} is not set")

# Monta caminho e nome do documento PDF
current_dir = Path(__file__).parent
pdf_patch = current_dir / "gpt5.pdf"

# Carrega o PDF
docs = PyPDFLoader(str(pdf_patch)).load()

# Divide o pdf em documentos com chunks de 1000 e com 150 de overlap, sem indexar
splits = RecursiveCharacterTextSplitter(
    chunk_size=1000, chunk_overlap=150, add_start_index=False
).split_documents(docs)

# Testa se existem splits (pedaços)
if not splits:
    raise SystemExit(0)

# Cria um novo documento
enriched = [
    Document(
        page_content=d.page_content,  # pega o page content dos documentos criados pelo split
        # adiciona campo metadata aonde k é a key e v é o value dos metadados obtidos no split, quando o value não estiver em branco/none
        metadata={k: v for k, v in d.metadata.items() if v not in ("", None)},
    )
    for d in splits  # roda um loop com todos os splits
]

# outra maneira de escrever a mesma coisa para criar documento
# enriched = []
# for d in splits:
#     meta = {k: v for k, v in d.metadata.items() if v not in ("", None)}
#     new_doc = Document(
#         page_content=d.page_content,
#         metadata=meta
#     )
#     enriched.append(new_doc)

# Cria o indice

ids = [
    f"doc-{i}" for i in range(len(enriched))
]  # cria o indice com o nome "doc-n" para cada documento criado anteriormente

# Cria o embedding para inserir no banco vetorial
embeddings = OpenAIEmbeddings(model=os.getenv("OPENAI_MODEL", "text-embedding-3-small"))

# Cria o store do PGVector
store = PGVector(
    embeddings=embeddings,
    collection_name=os.environ["PGVECTOR_COLLECTION"],
    connection=os.environ["PGVECTOR_URL"],
    use_jsonb=True,
)

# Grava os dados no banco
store.add_documents(documents=enriched, ids=ids)
