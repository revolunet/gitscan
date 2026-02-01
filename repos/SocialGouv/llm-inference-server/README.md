# LLM Inference

## Setup

```bash
poetry install
poetry shell
```

### Env variables

```bash
export HUGGING_FACE_TOKEN=<hugging_face_token>
export S3_ACCESS_KEY_ID=<s3_access_key_id>
export S3_SECRET_ACCESS_KEY=<s3_secret_access_key>
export S3_ENDPOINT_URL="https://s3.gra.io.cloud.ovh.net"
```

## Run

### Huggingface inference server

```bash
python llm_inference/hf_inference_server.py
```

### S3 inference server

```bash
python llm_inference/s3_inference_server.py
```

## Test

### Batch requests

```bash
python scripts/example_batch_request.py
```

### cURL

```bash
curl -X POST http://localhost:8000/generate \
-H "Content-Type: application/json" \
-d '{"prompts": ["Once upon a time in a faraway land", "A journey of a thousand miles begins with"]}'
```

```json
{"generated_texts":[", there lived a young girl named Alice. She was a curious and adventurous soul, always eager to explore the world around her. One day, while playing in her garden, Alice stumbled upon a strange looking key. Curious about its purpose, she picked it up and examined it closely. To her surprise, the key"," a single step. - Lao Tzu\nThe first step in the journey of a thousand miles is to take a step. The first step in the journey of a thousand miles is to take a step. The first step in the journey of a thousand miles is to take a step. The first step in the journey"]}
```

## Docker

```bash
docker build -t llm-inference-server .
```

### Run the S3 inference server

```bash
docker run -d \
    -e S3_ACCESS_KEY_ID=${S3_ACCESS_KEY_ID} \
    -e S3_SECRET_ACCESS_KEY=${S3_SECRET_ACCESS_KEY} \
    -e S3_ENDPOINT_URL=${S3_ENDPOINT_URL} \
    -e INFERENCE_SERVER=llm_inference.s3_inference_server \
    -p 8000:8000 \
    llm-inference-server
```

### Run the HuggingFace inference server

```bash
docker run -d \
    -e HUGGING_FACE_TOKEN=${HUGGING_FACE_TOKEN} \
    -e INFERENCE_SERVER=llm_inference.hf_inference_server \
    -p 8000:8000 \
    llm-inference-server
```
