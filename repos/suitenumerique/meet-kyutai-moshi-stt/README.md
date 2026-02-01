# meet-kyutai-moshi-stt

A project to build and run the Moshi STT server, optimized for GPU instances such as Runpod L40s. This repository includes Docker workflows and example scripts for testing the server via WebSocket.

## Useful Resources

* [Runpod GPU Instances](https://www.runpod.io/)
* [Kyutai delayed-streams-modeling repository](https://github.com/kyutai-labs/delayed-streams-modeling)
* [Kyutai test Python script: `stt_from_mic_rust_server.py`](https://github.com/kyutai-labs/delayed-streams-modeling/blob/main/scripts/stt_from_mic_rust_server.py)

For more details, refer to the [Kyutai documentation on text-to-speech](https://github.com/kyutai-labs/delayed-streams-modeling/blob/main/README.md#kyutai-text-to-speech), then check the Rust server section.
Also see @arnaud-robin’s work on [official Moshi templates with CUDA + Rust](https://github.com/suitenumerique/containers/tree/feat/moshi/official-templates/cuda-rust).
