## [1.39.2](https://github.com/SocialGouv/graal/compare/v1.39.1...v1.39.2) (2026-01-28)


### Bug Fixes

* Pipeline was crashing around similarity search because of S3 and async issues ([7a7bd4e](https://github.com/SocialGouv/graal/commit/7a7bd4eb6082aeeb66fec33a047f3659ac5759df))

## [1.39.1](https://github.com/SocialGouv/graal/compare/v1.39.0...v1.39.1) (2026-01-28)


### Bug Fixes

* Impossible to delete db manifests if S3 file doesn't exist ([d4a18ee](https://github.com/SocialGouv/graal/commit/d4a18ee24d5ab982714fea11f6289835b89a36ac))

# [1.39.0](https://github.com/SocialGouv/graal/compare/v1.38.1...v1.39.0) (2026-01-28)


### Features

* Put OAuth requests in Postgre DB ([81dbcd0](https://github.com/SocialGouv/graal/commit/81dbcd0b3ab37c32b655d7788b0f444bd63dac03))

## [1.38.1](https://github.com/SocialGouv/graal/compare/v1.38.0...v1.38.1) (2026-01-16)


### Bug Fixes

* disable cnpg recovery ([162352c](https://github.com/SocialGouv/graal/commit/162352c3bf24d624dd3e4a21bd90782c509c07f4))

# [1.38.0](https://github.com/SocialGouv/graal/compare/v1.37.1...v1.38.0) (2026-01-15)


### Features

* Show filenames and modal w/ metadata in admin pannel input pool tab ([8ec18fe](https://github.com/SocialGouv/graal/commit/8ec18fea0027b8ac99386963f2bda4aa74368a32))

## [1.37.1](https://github.com/SocialGouv/graal/compare/v1.37.0...v1.37.1) (2026-01-13)


### Bug Fixes

* Don't count duplicated keywords twice ([9248226](https://github.com/SocialGouv/graal/commit/9248226785a46f9bb31f9656e093313c7c461373))

# [1.37.0](https://github.com/SocialGouv/graal/compare/v1.36.0...v1.37.0) (2026-01-13)


### Features

* Count multiple occurences of keywords ([45fdcbe](https://github.com/SocialGouv/graal/commit/45fdcbeb7e95450819e0ff2a1d2f6f9edf31f260))

# [1.36.0](https://github.com/SocialGouv/graal/compare/v1.35.0...v1.36.0) (2026-01-13)


### Features

* Better feedback when building amdt DBs ([a08486c](https://github.com/SocialGouv/graal/commit/a08486ca1a6d32b1e8eae9dc0661ef86b0ef649a))

# [1.35.0](https://github.com/SocialGouv/graal/compare/v1.34.2...v1.35.0) (2026-01-13)


### Features

* Allow writers to add to existing amdt DBs ([30361a0](https://github.com/SocialGouv/graal/commit/30361a091ecab9eee46b7e57e2e79cc99a705991))

## [1.34.2](https://github.com/SocialGouv/graal/compare/v1.34.1...v1.34.2) (2026-01-12)


### Bug Fixes

* Handle async operations in processing pipeline ([38ca320](https://github.com/SocialGouv/graal/commit/38ca320d6e1b2cc0240b301defe467dc64534a2f))

## [1.34.1](https://github.com/SocialGouv/graal/compare/v1.34.0...v1.34.1) (2026-01-12)


### Bug Fixes

* Stop validation error on origin project if feature is not enabled ([c71e8f0](https://github.com/SocialGouv/graal/commit/c71e8f014b7187b143d884bb74e1952c1fa8e8fc))

# [1.34.0](https://github.com/SocialGouv/graal/compare/v1.33.0...v1.34.0) (2026-01-08)


### Features

* Add mission filter for amdt processing ([66a62c4](https://github.com/SocialGouv/graal/commit/66a62c446cf4eb449de6e67fee097e1c5361ba5b))

# [1.33.0](https://github.com/SocialGouv/graal/compare/v1.32.0...v1.33.0) (2026-01-08)


### Features

* Use Shared executors for offloading CPU-bound work ([8c81c09](https://github.com/SocialGouv/graal/commit/8c81c092942d13e7a87bd13ba251da5598b92d1f))

# [1.32.0](https://github.com/SocialGouv/graal/compare/v1.31.3...v1.32.0) (2026-01-08)


### Features

* Make preprocessing and file loading async ([7950b62](https://github.com/SocialGouv/graal/commit/7950b625b88185206db1fef5581962621b17e6ba))

## [1.31.3](https://github.com/SocialGouv/graal/compare/v1.31.2...v1.31.3) (2026-01-07)


### Bug Fixes

* pnpm migration ([#208](https://github.com/SocialGouv/graal/issues/208)) ([b4d32fa](https://github.com/SocialGouv/graal/commit/b4d32fa64f26ab866707324026385b127416590c))

## [1.31.2](https://github.com/SocialGouv/graal/compare/v1.31.1...v1.31.2) (2025-12-17)


### Bug Fixes

* Handle async migration in MigrationService ([d41063c](https://github.com/SocialGouv/graal/commit/d41063cce807251f2784ceb2f3e39e6a61929399))

## [1.31.1](https://github.com/SocialGouv/graal/compare/v1.31.0...v1.31.1) (2025-12-17)


### Bug Fixes

* Do not ignore `scripts/run_migrations.py` in docker build ([7737b97](https://github.com/SocialGouv/graal/commit/7737b970bb8f5492a24a60c2ddc96d86107417ba))

# [1.31.0](https://github.com/SocialGouv/graal/compare/v1.30.0...v1.31.0) (2025-12-17)


### Features

* Add backend to handle sim DB permissions ([4cfa4ef](https://github.com/SocialGouv/graal/commit/4cfa4ef9ea89d28be3d821a5a57d980fedf98451))
* Add frontend to manade sim DBs ([8b3f784](https://github.com/SocialGouv/graal/commit/8b3f784fad330edc249d4b8b41796f0750c25ade))
* Add index on email to improve performance on email column of `users` ([2fd51d8](https://github.com/SocialGouv/graal/commit/2fd51d8fbccf0f0b77a922583f907f81f11e3dce))

# [1.30.0](https://github.com/SocialGouv/graal/compare/v1.29.0...v1.30.0) (2025-12-17)


### Features

* Better handling of auth in backend routes ([1e9aa64](https://github.com/SocialGouv/graal/commit/1e9aa64cfa552093de9980a843119fe6201bba8a))
* Better handling of auth in the frontend ([1974dc3](https://github.com/SocialGouv/graal/commit/1974dc372fce63d57903427845c5c9c15ec882b2))

# [1.29.0](https://github.com/SocialGouv/graal/compare/v1.28.0...v1.29.0) (2025-12-16)


### Bug Fixes

* DbRoleEnum usage ([0a6ad46](https://github.com/SocialGouv/graal/commit/0a6ad4675bca0121ddd00836aaa45ab272cfb4e9))
* UUID import ([47f6c10](https://github.com/SocialGouv/graal/commit/47f6c102f2a97b7f24a167d01da4cc8b79ed3a9f))


### Features

* Add amendment_database_permissions table and models ([eac9e69](https://github.com/SocialGouv/graal/commit/eac9e693b1d8f8892c291ad113b9394f86ab313b))
* Add db permission routes ([9100675](https://github.com/SocialGouv/graal/commit/910067598bab9facc8d59d15c47cdcab00802ed4))
* Add DB permissions functions to the AuthorizationService ([95f6084](https://github.com/SocialGouv/graal/commit/95f60840d9efde5603c8815edc4117406791d538))
* Enforce DB permissions when similarity search is enabled ([92a8997](https://github.com/SocialGouv/graal/commit/92a8997aa62377de10e85f62633149b67109c92a))
* Filter accessible amdt databases based on permissions ([b77f80a](https://github.com/SocialGouv/graal/commit/b77f80aab84af61b5d5b45c27d950d168c50f049))
* Only show allowed databases to user when listing sim dbs ([ac3b9da](https://github.com/SocialGouv/graal/commit/ac3b9dac6d321d48daca638c99ad7154617e9ac6))
* Start working with the database ID in the frontend ([0294d01](https://github.com/SocialGouv/graal/commit/0294d01375289b27de5b21d8d2924de802d701c9))
* Transaction-safe creation of manifest + owner permission ([68f5e9e](https://github.com/SocialGouv/graal/commit/68f5e9e30cfa51f693f7f9664d79e6c0771561c7))

# [1.28.0](https://github.com/SocialGouv/graal/compare/v1.27.2...v1.28.0) (2025-12-11)


### Features

* Add migration service for DB migrations ([ef3afa9](https://github.com/SocialGouv/graal/commit/ef3afa95987fee4e7d1b492f27d0c9703f78a0d5))
* Make use of MigrationService in docker entry point script ([599da2a](https://github.com/SocialGouv/graal/commit/599da2aa8d58f99624aa176fb805ddb0cad72c4b))

## [1.27.2](https://github.com/SocialGouv/graal/compare/v1.27.1...v1.27.2) (2025-12-11)


### Bug Fixes

* Add credentials to config_s3_service ([042cbd5](https://github.com/SocialGouv/graal/commit/042cbd5bbd2712f66d9382e6ba7ce00ae0eee0ae))

## [1.27.1](https://github.com/SocialGouv/graal/compare/v1.27.0...v1.27.1) (2025-12-10)


### Bug Fixes

* preprod env was not correctly setup ([9c52fb9](https://github.com/SocialGouv/graal/commit/9c52fb9525367c81852054b0495b3a1a52f31004))

# [1.27.0](https://github.com/SocialGouv/graal/compare/v1.26.1...v1.27.0) (2025-12-09)


### Bug Fixes

* Actually use `input_files` column ([1344cdc](https://github.com/SocialGouv/graal/commit/1344cdcafc35fb42f6cbbe24697cfba210ee27fb))
* Adding new files in a DB and refactor of complex funcs ([fa01ded](https://github.com/SocialGouv/graal/commit/fa01ded0c0cfc2dc838e2a1802fa97bbe6f5689b))
* Remove s3_config_file_path from user config to avoid overwritting selected one ([89e05e9](https://github.com/SocialGouv/graal/commit/89e05e9b1f5c00a24215395d00cfa1ac391ae910))
* Rename 'metadata' column to 'db_metadata' in similarity_db_manifests table ([f3233f6](https://github.com/SocialGouv/graal/commit/f3233f647de2438813a69786aad21233a9505c48))


### Features

* **front:** Add ProtectedRoute for admin access to pages ([cb76430](https://github.com/SocialGouv/graal/commit/cb7643097120acf2e4f5d7c673be964e700264c9))
* **front:** Add s3 file browser ([c9553a1](https://github.com/SocialGouv/graal/commit/c9553a1a8827b05e350113ffec209844903dd1fd))
* **frontend:** Add API calls to backend for S3 admin pannel ([832198c](https://github.com/SocialGouv/graal/commit/832198c4bbdfd6678ac5b1cfde594998ffe92258))
* **UI:** Add a delete confirm modal ([63bc6fb](https://github.com/SocialGouv/graal/commit/63bc6fb83419e8370eceaf3d39d26f108b1459dc))
* **UI:** Add admin page on the UI ([ab805de](https://github.com/SocialGouv/graal/commit/ab805de031d60f7089f3996548a00d97d658d06e))
* **UI:** Add FileListTable ([9b12613](https://github.com/SocialGouv/graal/commit/9b1261310ff60886cc47e7bdb330319ef698bdb9))
* Add backend routes to manipulate S3 files ([66f9b47](https://github.com/SocialGouv/graal/commit/66f9b4710d841b037a05d5f460470d6ad8bbbbcc))
* Add configuration manager module ([2422a5b](https://github.com/SocialGouv/graal/commit/2422a5ba9054b714449fd6d88c536f7fa488c3f7))
* Add DatabaseAuthorizationProvider to auth providers ([1fe715b](https://github.com/SocialGouv/graal/commit/1fe715b2631d8edb25de46aebf2ddb3eb9296716))
* Add frontend code to handle proconnect login/logout ([cc6e06a](https://github.com/SocialGouv/graal/commit/cc6e06ac588b935f3aa71d554de593e66eb57db3))
* Add proconnect and session services ([adde108](https://github.com/SocialGouv/graal/commit/adde108ea4c856e53f7b99894117156e77427cb0))
* Add proconnect and users routes ([9dfd8ab](https://github.com/SocialGouv/graal/commit/9dfd8abfa558341867de4f69594c69a1b03dc37d))
* Add similarity DB manifest route and service ([edfe957](https://github.com/SocialGouv/graal/commit/edfe957b19eff4d8c4cd554f04f53144084404a7))
* Add user configuration service and route ([3583b60](https://github.com/SocialGouv/graal/commit/3583b609a65d56ab108642cb3a2402bee5c4fb28))
* Make use of manifests and user configs in the backend ([ed3a3ee](https://github.com/SocialGouv/graal/commit/ed3a3ee2323d262213206426e203a7d8db38056b))
* Update UI calls to use the new DB + user configs ([1940006](https://github.com/SocialGouv/graal/commit/19400068543e1eba989b04605207eb9744a0048b))

## [1.26.1](https://github.com/SocialGouv/graal/compare/v1.26.0...v1.26.1) (2025-11-27)


### Bug Fixes

* continue after upload ([1135339](https://github.com/SocialGouv/graal/commit/1135339029c12c54cf756c95733f0de65199880f))

# [1.26.0](https://github.com/SocialGouv/graal/compare/v1.25.0...v1.26.0) (2025-11-20)


### Features

* Add alembic and example env vars ([d6d7d00](https://github.com/SocialGouv/graal/commit/d6d7d00e7d81490d0ff8d639ac7818c876def5bf))
* Add DB models and seeding scripts ([4f4fe5d](https://github.com/SocialGouv/graal/commit/4f4fe5d108850731cc1acd809f8c610ed8f9288b))
* Add docker for local postgre setup ([264acd3](https://github.com/SocialGouv/graal/commit/264acd3d3442a0a7ad481dd2f14944fba61f221c))

# [1.25.0](https://github.com/SocialGouv/graal/compare/v1.24.0...v1.25.0) (2025-11-19)


### Features

* add DSFR Stepper navigation for improved UX ([#180](https://github.com/SocialGouv/graal/issues/180)) ([df8f570](https://github.com/SocialGouv/graal/commit/df8f570a6fdae02eaedbdbf75ed4260b9d9fb8b0))

# [1.24.0](https://github.com/SocialGouv/graal/compare/v1.23.0...v1.24.0) (2025-11-13)


### Features

* Make UI use auth routes ([592a2a4](https://github.com/SocialGouv/graal/commit/592a2a456e05d10af1a60ed30e12f12883169b8b))

# [1.23.0](https://github.com/SocialGouv/graal/compare/v1.22.0...v1.23.0) (2025-11-13)


### Features

* Add auth in the backend ([77ecb55](https://github.com/SocialGouv/graal/commit/77ecb55f05a59caa3818fa81a709e0e7057791cb))

# [1.22.0](https://github.com/SocialGouv/graal/compare/v1.21.0...v1.22.0) (2025-11-13)


### Features

* Add admin pannel component ([40e6fd3](https://github.com/SocialGouv/graal/commit/40e6fd349fc88f56e20cb708548fa59239fdfc0b))

# [1.21.0](https://github.com/SocialGouv/graal/compare/v1.20.0...v1.21.0) (2025-11-13)


### Bug Fixes

* Credit table matcher couldn't handle some weirdly formatted numbers ([171e894](https://github.com/SocialGouv/graal/commit/171e894311669f6fdf56696bec0bcb9747a3dc92))
* Metadata in api requests was badly formed ([51b1316](https://github.com/SocialGouv/graal/commit/51b13161ababd4fc9e35af2edb01c78940f584f0))


### Features

* Clear uploaded files after db building ([b3a23a3](https://github.com/SocialGouv/graal/commit/b3a23a3f721676051295612f2c0038815cd6462f))

# [1.20.0](https://github.com/SocialGouv/graal/compare/v1.19.1...v1.20.0) (2025-11-06)


### Features

* Add UI for appending to an amdt DB ([0cabff9](https://github.com/SocialGouv/graal/commit/0cabff9cd07706f56537650fa51ca535a96ae05a))

## [1.19.1](https://github.com/SocialGouv/graal/compare/v1.19.0...v1.19.1) (2025-11-06)


### Bug Fixes

* Some inconsistencies in amdt DB handling ([8841e90](https://github.com/SocialGouv/graal/commit/8841e9014705415647db54101633e5362f9abba5))

# [1.19.0](https://github.com/SocialGouv/graal/compare/v1.18.0...v1.19.0) (2025-11-06)


### Features

* Add append to database + manifest handling in DatabaseBuilder ([fc28707](https://github.com/SocialGouv/graal/commit/fc287079ce790c99b8a901a2be04642681a40258))

# [1.18.0](https://github.com/SocialGouv/graal/compare/v1.17.0...v1.18.0) (2025-11-05)


### Features

* Add new requests and response types for appending to an amdt DB ([b8dcafb](https://github.com/SocialGouv/graal/commit/b8dcafb86fadeb98fe5c1f214a939a501060dafb))

# [1.17.0](https://github.com/SocialGouv/graal/compare/v1.16.0...v1.17.0) (2025-11-05)


### Features

* Add ManifestService for handling file upload manifests ([86e4030](https://github.com/SocialGouv/graal/commit/86e40302494e897ac39214902af329d6ce07193b))

# [1.16.0](https://github.com/SocialGouv/graal/compare/v1.15.1...v1.16.0) (2025-11-05)


### Features

* Add input file and manifest handling in S3Service ([668af63](https://github.com/SocialGouv/graal/commit/668af63313a6ccdb0a34f400e6318b5c4fe59c94))

## [1.15.1](https://github.com/SocialGouv/graal/compare/v1.15.0...v1.15.1) (2025-11-04)


### Bug Fixes

* Better thread safe FileHashService implementation ([6590c85](https://github.com/SocialGouv/graal/commit/6590c85527fe42f5172ce981e72a29ea41b0d4b4))

# [1.15.0](https://github.com/SocialGouv/graal/compare/v1.14.0...v1.15.0) (2025-11-04)


### Features

* Add file hash service ([0f8a4ae](https://github.com/SocialGouv/graal/commit/0f8a4ae083036743872a9f0c638a2f66a9de9f9c))

# [1.14.0](https://github.com/SocialGouv/graal/compare/v1.13.1...v1.14.0) (2025-11-04)


### Features

* Remove PII data from amendment DBs ([a290aeb](https://github.com/SocialGouv/graal/commit/a290aebae2c4b8271ddf5336b6b60957d9e0ddfc))

## [1.13.1](https://github.com/SocialGouv/graal/compare/v1.13.0...v1.13.1) (2025-11-01)


### Bug Fixes

* Stop filtering columns out for CSV export ([a3c2666](https://github.com/SocialGouv/graal/commit/a3c2666860d1be6ee9dababb132fd1fe427e6960))

# [1.13.0](https://github.com/SocialGouv/graal/compare/v1.12.0...v1.13.0) (2025-11-01)


### Features

* Add Mistral client ([02dbe72](https://github.com/SocialGouv/graal/commit/02dbe72b4a484fe622cf13fe3aba7c0061221a2f))

# [1.12.0](https://github.com/SocialGouv/graal/compare/v1.11.0...v1.12.0) (2025-10-28)


### Features

* Add training & optimization scripts ([d3980ef](https://github.com/SocialGouv/graal/commit/d3980ef158a6ba355a9d642f97074cede862aa17))

# [1.11.0](https://github.com/SocialGouv/graal/compare/v1.10.2...v1.11.0) (2025-10-28)


### Features

* Add evaluation metrics for DSPy ([a6eb3d9](https://github.com/SocialGouv/graal/commit/a6eb3d97a9a3c682929f13dc13fb9c7e1bf9012b))
* Add prompt S3 storage infrastructure ([198054a](https://github.com/SocialGouv/graal/commit/198054a1264d2c3cb4b7f5e56add68321969ac27))
* Add training set prep for DSPy ([73e4fb0](https://github.com/SocialGouv/graal/commit/73e4fb0616a83ae8e5837bf930fd6645d0de3c38))
* MIPROv2 Optimizer Implementation ([0109688](https://github.com/SocialGouv/graal/commit/010968898fec22d298c351807de8df3d62f64517))

## [1.10.2](https://github.com/SocialGouv/graal/compare/v1.10.1...v1.10.2) (2025-10-28)


### Bug Fixes

* Properly affect type to LLM client to get correct rate limiting config ([b2ca837](https://github.com/SocialGouv/graal/commit/b2ca8372a68ad613788776cdb80ca9575260407e))

## [1.10.1](https://github.com/SocialGouv/graal/compare/v1.10.0...v1.10.1) (2025-10-24)


### Bug Fixes

* Make sure prompt is a string instead of some weird Series ([a57953b](https://github.com/SocialGouv/graal/commit/a57953b77ca70064525d1b64177249b6a5797bfe))

# [1.10.0](https://github.com/SocialGouv/graal/compare/v1.9.0...v1.10.0) (2025-10-23)


### Features

* Add DSPy adapters and core components ([f7da401](https://github.com/SocialGouv/graal/commit/f7da4015683285ec9532f74caf54d71b06468094))

# [1.9.0](https://github.com/SocialGouv/graal/compare/v1.8.0...v1.9.0) (2025-10-23)


### Features

* Start adding support for DSPy ([79e9372](https://github.com/SocialGouv/graal/commit/79e937225890a4ce3f1c5616d862127c714a5fa5))

# [1.8.0](https://github.com/SocialGouv/graal/compare/v1.7.1...v1.8.0) (2025-10-23)


### Features

* Add summary generation feature to UI ([18d43be](https://github.com/SocialGouv/graal/commit/18d43be015d0f8ef9c28e1cea77a3fc1ef985096))
* Summary generation backend for web app ([e8d346f](https://github.com/SocialGouv/graal/commit/e8d346f34372daa0598275acd4ffdfe7b4cdc531))

## [1.7.1](https://github.com/SocialGouv/graal/compare/v1.7.0...v1.7.1) (2025-10-22)


### Bug Fixes

* Make database_file required ([cfb637d](https://github.com/SocialGouv/graal/commit/cfb637d6d084c56cb2130e0b5056d91861279c06))

# [1.7.0](https://github.com/SocialGouv/graal/compare/v1.6.1...v1.7.0) (2025-10-22)


### Bug Fixes

* Database selector was wrong. Now uses combobox ([d4c4254](https://github.com/SocialGouv/graal/commit/d4c42542a49eb903b21698a2634ebfcc6f605ad8))


### Features

* Add combobox component to the UI ([a7ed289](https://github.com/SocialGouv/graal/commit/a7ed289c0ae5d698845e43e1d70517285b15d453))

## [1.6.1](https://github.com/SocialGouv/graal/compare/v1.6.0...v1.6.1) (2025-10-22)


### Bug Fixes

* Better HTML preprocessing ([39e6ed5](https://github.com/SocialGouv/graal/commit/39e6ed5813b9637e83e7e014a61e68adace1259c))

# [1.6.0](https://github.com/SocialGouv/graal/compare/v1.5.2...v1.6.0) (2025-10-21)


### Bug Fixes

* Allotment integration test ([6bc3182](https://github.com/SocialGouv/graal/commit/6bc318227a6a4ac3ec972f5cdf75e480910cb0f0))


### Features

* Add load_from_local to SimilarityDBLoader ([0826373](https://github.com/SocialGouv/graal/commit/0826373bfb65acc62440d6ae5a5928f23acef1b8))

## [1.5.2](https://github.com/SocialGouv/graal/compare/v1.5.1...v1.5.2) (2025-10-21)


### Bug Fixes

* Logging import in integration tests ([833c3ef](https://github.com/SocialGouv/graal/commit/833c3efca759e045d37dbc5870d6780633b6d3e0))

## [1.5.1](https://github.com/SocialGouv/graal/compare/v1.5.0...v1.5.1) (2025-10-20)


### Bug Fixes

* Allotment was not being run ([b342aef](https://github.com/SocialGouv/graal/commit/b342aef92bc3ab6df02dc5ff75548c0da4979ab5))

# [1.5.0](https://github.com/SocialGouv/graal/compare/v1.4.0...v1.5.0) (2025-10-20)


### Features

* Add auto data extraction when building amendment DB ([1728d0b](https://github.com/SocialGouv/graal/commit/1728d0badc12361eeb68d1abe2d67caece6708f6))
* Add date extractor from amendment file ([d23f997](https://github.com/SocialGouv/graal/commit/d23f997b281578e960415e519ecc675e00cae9f2))

# [1.4.0](https://github.com/SocialGouv/graal/compare/v1.3.0...v1.4.0) (2025-10-20)


### Bug Fixes

* Similarity within lectures crash ([0c576e6](https://github.com/SocialGouv/graal/commit/0c576e65dccc231e29d939359d6f2efd4b063b6d))


### Features

* Allow for the batch upload of DB files ([fbab773](https://github.com/SocialGouv/graal/commit/fbab773faa3988c823b984708846361e5661d562))

# [1.3.0](https://github.com/SocialGouv/graal/compare/v1.2.0...v1.3.0) (2025-10-20)


### Features

* Add backend for amdt building DB ([9bc8190](https://github.com/SocialGouv/graal/commit/9bc8190b802eee6c7015e0f71c99a85f44885ee2))
* Add early UI for amdt database building ([b004955](https://github.com/SocialGouv/graal/commit/b0049556365b543df5d3f4b50dd6acd4490af686))
* Add similarity DB builder service ([7a218dd](https://github.com/SocialGouv/graal/commit/7a218ddcf1c9355d0231990308d4d7c52eebd167))

# [1.2.0](https://github.com/SocialGouv/graal/compare/v1.1.2...v1.2.0) (2025-10-16)


### Features

* Add overwrite configs to the UI ([3c57cad](https://github.com/SocialGouv/graal/commit/3c57cadf805fe68bec543be06158a27a345b6ed3))
* Handle overwritting config in the backend ([851fa5c](https://github.com/SocialGouv/graal/commit/851fa5c6a39421fe51cb557837dc7b8bc70c522b))
* Handle overwritting for attribution ([d80e377](https://github.com/SocialGouv/graal/commit/d80e377f855059e10ccb09da7d709d192116f302))
* Handle overwritting in default opinion feature ([fc797a1](https://github.com/SocialGouv/graal/commit/fc797a10ac8e9b4807e81fe669517b8ce37b1d34))

## [1.1.2](https://github.com/SocialGouv/graal/compare/v1.1.1...v1.1.2) (2025-10-16)


### Bug Fixes

* **deps:** update dependency zustand to v5 ([35ecf1a](https://github.com/SocialGouv/graal/commit/35ecf1aa8b9607bf4d6b4fda669cb4acfb484163))

## [1.1.1](https://github.com/SocialGouv/graal/compare/v1.1.0...v1.1.1) (2025-10-15)


### Bug Fixes

* Stop users from running "empty" processing (no feature enabled) ([fd96031](https://github.com/SocialGouv/graal/commit/fd960318043cecee527f856a84b5cef6bb686f79))

# [1.1.0](https://github.com/SocialGouv/graal/compare/v1.0.1...v1.1.0) (2025-10-15)


### Bug Fixes

* Stop features from overwritting each other's "commentaires" columns ([527f81f](https://github.com/SocialGouv/graal/commit/527f81fc4bd3d58b06059921349b7339dc0a4274))


### Features

* Add config file drop down on UI ([e8440ad](https://github.com/SocialGouv/graal/commit/e8440ad617b1dd7a7b9a7477c13b2456277d3a38))
* **backend:** Add support for fetching config files from S3 ([551c594](https://github.com/SocialGouv/graal/commit/551c594509b9176fca0b8bf23b1746471cba04b4))

## [1.0.1](https://github.com/SocialGouv/graal/compare/v1.0.0...v1.0.1) (2025-10-10)


### Bug Fixes

* default refinement_pct_threshold in ClusteringService ([6c470cf](https://github.com/SocialGouv/graal/commit/6c470cf32897985325e50f9a7558b762f2d147c1))

# 1.0.0 (2025-10-09)


### Bug Fixes

* Actually connect frontend configuration to backend processing ([1526ca2](https://github.com/SocialGouv/graal/commit/1526ca28eecfc0fb0f13fe271757a7e8f8dc4347))
* Add acronym_mapping to all calls to load_keywords ([ed9f9aa](https://github.com/SocialGouv/graal/commit/ed9f9aaca2d3da712824af20140f5b2a7159fd03))
* Add auth for the LLMInferenceAPIClient in populate_summaries ([cc6cc1c](https://github.com/SocialGouv/graal/commit/cc6cc1c88532e97b51ec445f5f766395deac03bd))
* Add import logging.config to populate_summaries ([c64872a](https://github.com/SocialGouv/graal/commit/c64872a73d0bad45c03ae54fc2afd5e1e8d89d41))
* Add queue timeout to SummaryGenerationLoadBalancer instances ([d22d9e5](https://github.com/SocialGouv/graal/commit/d22d9e5905774065973f3605f31fe7a527fcad6a))
* Allotment handler was removing data for non-allocated amdts ([d2a226d](https://github.com/SocialGouv/graal/commit/d2a226db79b38aa85246284690d8d2436cdcffac))
* Attribution and text utils tests ([a205af2](https://github.com/SocialGouv/graal/commit/a205af2442807e15f57f7f714c84a3289d983c07))
* Attribution tests for attribution ([b8a00f1](https://github.com/SocialGouv/graal/commit/b8a00f102440e1cc4ad54e5cc95bd5c304969a2b))
* Attribution through redactional amdts ([94c0e94](https://github.com/SocialGouv/graal/commit/94c0e949081c0fc9a8e5d9cfbe92c094de7ce325))
* Attribution was using the wrong patterns for law and ordonnance ([3a0bfb1](https://github.com/SocialGouv/graal/commit/3a0bfb162426b0788135ee1bd7e8e8773bd0f388))
* AttributionTextNormalizer was not using the right delimiter for `remove_sentences_starting_with` ([75cded6](https://github.com/SocialGouv/graal/commit/75cded62d7985d84cb7205c750e26499595f66fb))
* Await file writing in web processing service ([1290078](https://github.com/SocialGouv/graal/commit/12900788a8a6d330ce7dc259d533933154ef540b))
* Better detection of redactional amdts ([e24c29a](https://github.com/SocialGouv/graal/commit/e24c29a8f6a6004bf057e9bf130430f07d465559))
* Better handling of interstitial amendments so the comments don't show attrib when they shouldn't ([4a2816e](https://github.com/SocialGouv/graal/commit/4a2816e9933681fbd99bd915f87430a6e8eda322))
* Change some summary generation parameters to avoid Timeouts ([ede6fe8](https://github.com/SocialGouv/graal/commit/ede6fe8fda4ff15bc1ebc06b6489d6afbbd8acd6))
* Choose head of allotment that contains non-default attribution if possible ([95e769e](https://github.com/SocialGouv/graal/commit/95e769eea5489ba734d53be6d0c087755990639c))
* Consider "Affectation (nom)" as empty also when it is None (not just empty list) ([79d5829](https://github.com/SocialGouv/graal/commit/79d58293d17839e5150f8c830dcf6f811b6e9258))
* Correct similarity thresholds in InadmissibleAmendmentHandler ([df81d49](https://github.com/SocialGouv/graal/commit/df81d496980e6a6dd050a4e99c91e498748673b6))
* Default config and csv filename matching ([e5318a3](https://github.com/SocialGouv/graal/commit/e5318a30b0314befd10dc9684aaddc223df75461))
* Don't add a /n in front of similarity comment if it was previously empty ([f1ff966](https://github.com/SocialGouv/graal/commit/f1ff9660e51ef6ed07c504e693ef4f8fe16b0734))
* Don't preprocess response text for similarity search ([937d78a](https://github.com/SocialGouv/graal/commit/937d78a22a569e67c2720ede53f4f412c1006495))
* Ensure missing timestamps are replaced with sane defaults ([a0e60e8](https://github.com/SocialGouv/graal/commit/a0e60e8f4fe5c1c6e777068fba89833d174dbd04))
* Ensure that the similarity comment does not override information already in that column "Commentaires" ([2e32d1a](https://github.com/SocialGouv/graal/commit/2e32d1a491d85d19da299107ce6b7afbf376e8b0))
* Fix "loi" being written as "law" in its enum. Also small improvement on AttributionPopulator ([82602db](https://github.com/SocialGouv/graal/commit/82602dbd7152c70faa52261115a6b258073a46b6))
* Fix attributor integration test with new pre-processor static methods ([98896fe](https://github.com/SocialGouv/graal/commit/98896feac8717e1f014902764638dfb8e41b86a5))
* Fix retry logic looping infinitely. Also added tests for it ([ca46e9f](https://github.com/SocialGouv/graal/commit/ca46e9f7226f8b4e369872dd8b591b361b86adff))
* Gard against nan in keyword matches for attribution ([dd87828](https://github.com/SocialGouv/graal/commit/dd878286a7eee7096aec12da81d17871dafddf5a))
* Handle "Rédactionnel" exposé des motifs ([3307002](https://github.com/SocialGouv/graal/commit/33070029403ffc3778dd713a581eb5ae42915943))
* Handle the case where no similarity is found to avoid division by zero error ([b2999b0](https://github.com/SocialGouv/graal/commit/b2999b0ac141788fdc5cdb1977d175d0b2455df0))
* Handling nan in keyword attribution ([390fe56](https://github.com/SocialGouv/graal/commit/390fe56374530cc0a692d2c6ef500f4127fac36b))
* Ignore "la perte de recettes" instead of "la perte de recettes pour" ([9cf4a62](https://github.com/SocialGouv/graal/commit/9cf4a62e38a32602ae051085f3e556923bfc6349))
* Index out of bound for stop index in summary generation ([59a4511](https://github.com/SocialGouv/graal/commit/59a451154b5385db0b38a4cd1a4cc0528fa83c58))
* int casting in credit table matching ([4762158](https://github.com/SocialGouv/graal/commit/4762158d3dfd6d3d78a89bfe02358f48b952080e))
* Keyword attribution was ignoring a large number of possibilities ([539ef38](https://github.com/SocialGouv/graal/commit/539ef38a7b978b2139c27ed86e24a8dcfc4b3a09))
* lowercase names in attribution data loader ([0029625](https://github.com/SocialGouv/graal/commit/0029625ae6ee56ae92dce3f6d437b6666a36a049))
* Make AmendmentSummarizer use amdt_idx instead of row_idx ([3dab3d8](https://github.com/SocialGouv/graal/commit/3dab3d8f1e7ccbec1a0ce49ff6fe8f661bac31a6))
* Make small fixes here and there ([f7c3e5a](https://github.com/SocialGouv/graal/commit/f7c3e5ad71213f4d8b0708a9e9e2a14ef346ceab))
* Make sure `AmendmentPreview` is properly built ([4827e62](https://github.com/SocialGouv/graal/commit/4827e62ef18ad3813d055c599c71b63b34ce655a))
* Make sure the Commentaires column contains at least the empty string in similarity ([3ac1d5f](https://github.com/SocialGouv/graal/commit/3ac1d5fe46c0abdc4362459a5739d6378cee384e))
* Merging signale and full pipeline result would overwrite when signale value was empty ([bd5bbfa](https://github.com/SocialGouv/graal/commit/bd5bbfaccc72fbd4cf0f537d42858dc920c5521b))
* Move replace_acronyms calls in the right positions ([81f5ed0](https://github.com/SocialGouv/graal/commit/81f5ed0baf3f415243e0c282a596155a2533f2a1))
* Populate allotments' integration test was broken following new refactor ([3e687a6](https://github.com/SocialGouv/graal/commit/3e687a605095e9df6475d12f44706d7f16de7319))
* Preprocessing issues for attribution ([4a228d2](https://github.com/SocialGouv/graal/commit/4a228d23136aec52765194a9bcdf0b59aafb556b))
* Remove forced removal of codes and ordonnances that was used for testing ([d98c98a](https://github.com/SocialGouv/graal/commit/d98c98a0524c4928fc6ad922a06938f00f3960e6))
* Remove gages in similarity DB ([25d588f](https://github.com/SocialGouv/graal/commit/25d588f173a360137e313ebd289c8c8e3fef2f53))
* Renamed `handle_common_amendment_expose_and_redactional` ([3619f29](https://github.com/SocialGouv/graal/commit/3619f29fdc720c83459d9740b60f8586b6dc3d35))
* Robust JSON loading ([81aa4aa](https://github.com/SocialGouv/graal/commit/81aa4aa682cddcd06434e0a5cb90a6b1282c0a56))
* SimilarityHandler preprocessing was removing Réponse and Sort from old_amendements_df ([535ad47](https://github.com/SocialGouv/graal/commit/535ad47a7e0a5357da8f3016503505911d866b0e))
* Small errors around "mission_titre_court" ([1c654ea](https://github.com/SocialGouv/graal/commit/1c654ea1d558dc123772d18f91697056e9a65cdc))
* Stop breaking when a column doesn't exist initially ([46d6aed](https://github.com/SocialGouv/graal/commit/46d6aed0fb96e65aeced2f0489c8e48234667780))
* Stop double error alert from showing up on FileUpload issue ([6c86f8e](https://github.com/SocialGouv/graal/commit/6c86f8ee0f4cf8e65bfd50958f5f0e113c6c2743))
* Stop failing if "nan" does not exist in articles set for attribution ([479340f](https://github.com/SocialGouv/graal/commit/479340f538a8435b9b9bddea5c8826c91476128e))
* Stop index not being used and misc tiny improvements ([7547272](https://github.com/SocialGouv/graal/commit/7547272261d7073bec0c74550e152e932b414f6c))
* Stop looking at attribution once a single candidate was found ([e1145b0](https://github.com/SocialGouv/graal/commit/e1145b0b90d140c2a929c036b9ba3f87f8a14dbd))
* Stop unidecoding before generating summaries ([ab54e74](https://github.com/SocialGouv/graal/commit/ab54e74d821be7af00ca093b9e08c5add3b1fed3))
* Tests for attribution loader ([d643e22](https://github.com/SocialGouv/graal/commit/d643e2274eb03137db096df3c4317880daaa0271))
* Trigger file handling with file browser ([42a8dde](https://github.com/SocialGouv/graal/commit/42a8dde08fbaaa0ce0ef8fcaec2c41b266d95475))
* **allotment:** Make allotment column configurable ([fed415f](https://github.com/SocialGouv/graal/commit/fed415f7dd74d94a4c2b092efd4f7c58a5f2d4db))
* **attrib:** Better parsing of potential numbers in column "Nº Programe" ([f2ec844](https://github.com/SocialGouv/graal/commit/f2ec84423ca747dcbc1d362b6270c4bf19b7603f))
* **attrib PLF:** Use "Autorisations d’engagement" instead of "Crédits de paiement" ([01fb08e](https://github.com/SocialGouv/graal/commit/01fb08ec9cddb070f226b5cb0807ab3744ff0682))
* **attribution:** Bug with punctuation and keyword matching ([f96b743](https://github.com/SocialGouv/graal/commit/f96b7438847958941377b927d857a98550076866))
* **similarity:** Activate similarity commenting even if allotment is not enabled ([cbcb038](https://github.com/SocialGouv/graal/commit/cbcb0389a0afb26c1e62b85b4cbfd1d6210aa8ba))
* **similarity:** Make column used for similarity come from config ([6957abd](https://github.com/SocialGouv/graal/commit/6957abd1d6c829cb3a944437d6b792fa4a04c92d))
* **similarity:** Mention all copied columns in amdt comment prefix ([404eac0](https://github.com/SocialGouv/graal/commit/404eac0635f2b260b6f3325d12c57d2af1560f39))
* Sentence removal will not remove delimiters anymore ([ec0409b](https://github.com/SocialGouv/graal/commit/ec0409bfa0f7afc853378bbefaa7424344d561be))
* Similarity around amdt body was not filtered properly ([bab814f](https://github.com/SocialGouv/graal/commit/bab814fb2eea14a24a634f17f60087b09ae2f171))
* Typo on "Défault" instead of "Défaut" ([d884050](https://github.com/SocialGouv/graal/commit/d8840508fdc109a97c196c9e12dad3cde264aafd))
* Use amdt_idx to copy matches between old and new PLFSS ([97d010f](https://github.com/SocialGouv/graal/commit/97d010f7b9d6375fe0d2951b969ed65dca30886f))
* Use loc in remove_empty_rows_for_given_columns to avoid setting value on df vue ([6027a5e](https://github.com/SocialGouv/graal/commit/6027a5e508c8e4767a5153502bae6a7af68ed6cd))
* Wrong import in full pipeline ([c84fa8a](https://github.com/SocialGouv/graal/commit/c84fa8a2d86dd20667865b1d2b0941c6a1ae65fa))


### Features

* Add a "Commencer le traitement" button ([0dd0809](https://github.com/SocialGouv/graal/commit/0dd08098e98fae3573e47e3c7e3bce7cfd320984))
* Add a processing configuration to API + UI ([709384b](https://github.com/SocialGouv/graal/commit/709384b9897deb2bd2cd324171cc46bdf901519a))
* Add a web API for GRAAL processing pipeline ([d2bc1ec](https://github.com/SocialGouv/graal/commit/d2bc1ecdb18b6c6311584d82fe434226beaee766))
* Add ability to preprocess old amdts from an excel file ([12d438c](https://github.com/SocialGouv/graal/commit/12d438cba93b60d510c551a3e39e2e0cf57d8b57))
* Add ability to preserve values already filled in through feature flag ([7657aa1](https://github.com/SocialGouv/graal/commit/7657aa191400fb0017082217c2497ad42b3b898f))
* Add Allotment config drop down ([8169a94](https://github.com/SocialGouv/graal/commit/8169a945098786798e9331f1e812e15a4c26a42c))
* Add allotment feature ([207b007](https://github.com/SocialGouv/graal/commit/207b0077ff49c9200b689972766b0ebe97585784))
* Add attribution matcher for redactional amdts ([98f6b24](https://github.com/SocialGouv/graal/commit/98f6b247815736bd0575e55859e4c4272f6fd180))
* Add auth to OllamaAPIClient ([58cc550](https://github.com/SocialGouv/graal/commit/58cc55009956aa9b9ec5debc4d538ba408989dca))
* Add automatic frontend type generation to match backend FastAPI ([c1e0207](https://github.com/SocialGouv/graal/commit/c1e0207c70b816b71c1e1a605b07a2dff55f96d7))
* Add BlindEvalProject to build excel files for LLM evaluation in summary gen ([faae675](https://github.com/SocialGouv/graal/commit/faae6750bda62fd74746c0a0a4b560adde8ddcfc))
* Add ChatGPTAPIClient ([58a43ef](https://github.com/SocialGouv/graal/commit/58a43ef5b46ea136827164bf34707787ca2d8b34))
* Add columns to copy and threshold slider components ([9bb5044](https://github.com/SocialGouv/graal/commit/9bb5044ded4fe7b57425a50e017f3b7e01d196b5))
* Add configs to similarity search ([9db35b9](https://github.com/SocialGouv/graal/commit/9db35b95dc096ca234390203370e46ad53ae945a))
* Add early stage of uploading file for processing ([8b37065](https://github.com/SocialGouv/graal/commit/8b37065345c6d8b7808e165f2038982363374989))
* Add feature flag for attribution of interstitial amdts only ([ba5efc2](https://github.com/SocialGouv/graal/commit/ba5efc285890550e9def17cbcb49e0bdcd975f34))
* Add feature flag for generating placeholder amdt bodies ([8830394](https://github.com/SocialGouv/graal/commit/883039431de6fe47c08c2af264048c1065d5435e))
* Add inadmissible handling to full pipeline ([060733d](https://github.com/SocialGouv/graal/commit/060733df37fd57fe68477a43a44c4c187d8b1961))
* Add LLaMaAPI client ([0faf36e](https://github.com/SocialGouv/graal/commit/0faf36e3afdc01ddad1769e6a5a0c5d9aa6d65c9))
* Add new config "mission_titre_court_filter" ([a21631b](https://github.com/SocialGouv/graal/commit/a21631b5a8429e09f17805d3d1f448f97da0dc52))
* Add new config preprocessor for GRAAL pipeline ([2b3c837](https://github.com/SocialGouv/graal/commit/2b3c8374c7d6f7f3ed989a12a0877dc0985c1df0))
* Add OllamaAPIClient ([12295ef](https://github.com/SocialGouv/graal/commit/12295ef205e16a1ec0e5aecc37200785e3f5ef3a))
* Add opinion feature ([ea491c4](https://github.com/SocialGouv/graal/commit/ea491c477874a04b40ec0374fe670127d2af8b6e))
* Add origin project parameter to the UI ([0c4620d](https://github.com/SocialGouv/graal/commit/0c4620dd7fd0afeddac7da33abd7dc725f8dc7f9))
* Add pipeline orchestrator ([5a25c0a](https://github.com/SocialGouv/graal/commit/5a25c0a033c9463ba109142899eef9cf19025577))
* Add rate limiting implementations ([87abc5c](https://github.com/SocialGouv/graal/commit/87abc5c61660a56c799ae7763af4b6d11bbb1a45))
* Add rate limiting in BlinEvalProject ([deedef2](https://github.com/SocialGouv/graal/commit/deedef280b37f5ba19e6f23cfa857a59c2ccdc65))
* Add s3 file upload script ([cbae09e](https://github.com/SocialGouv/graal/commit/cbae09ebc661e2365f278e3fd19d011da407058b))
* Add script to merge work already done in Signale with result of full pipeline ([db08a6b](https://github.com/SocialGouv/graal/commit/db08a6b3f6173df8bbe65f81eecc604cf1ab74eb))
* Add similarity finding on "Corps amdt" in full pipeline ([963a409](https://github.com/SocialGouv/graal/commit/963a409c6c06dde4ebc79d0af15fcb795f3245ac))
* Add similarity search feature ([aad51cd](https://github.com/SocialGouv/graal/commit/aad51cd84bbab296b9f28f8ff86ccd5314abd58c))
* Add support for laws and ordonnances in attribution ([3c04976](https://github.com/SocialGouv/graal/commit/3c04976e2f5e29f0fed4aca95e06faedebddae3b))
* Add timeout param to AlbertAPI client ([504bc56](https://github.com/SocialGouv/graal/commit/504bc567b267ac1512f79fba72d290be81f71d32))
* Auto detect input file type to use the right amdt df loader ([023bccb](https://github.com/SocialGouv/graal/commit/023bccb4b5fa003c520cf887b8dc4f2fcbee3eda))
* Bettwer keyword matcher for exact sentence matching ([9d234f5](https://github.com/SocialGouv/graal/commit/9d234f536a49f99fc582f7232a04acbec85c9d1e))
* Deprioritize empty response amdts in similarity ([0188b42](https://github.com/SocialGouv/graal/commit/0188b4242ba04fad268c6233ff4403fb9c7d8c1c))
* Enable downloading an excel file at end of processing ([c95846b](https://github.com/SocialGouv/graal/commit/c95846bf398482b3ebb6133fc4c1c1398ba1992e))
* Enable ignoring amdts that have already been processed ([c1993b7](https://github.com/SocialGouv/graal/commit/c1993b722b5b8d05cd02c3a879a3af884065d3e6))
* Implement new attribution strategy (early_exit) for PLF ([dabdfdb](https://github.com/SocialGouv/graal/commit/dabdfdb6a245b7b6cce8ff37914b38e1827c6756))
* Make use of rate limiting in SummaryGenerationLoadBalancer ([926e4f2](https://github.com/SocialGouv/graal/commit/926e4f2be5292bcf1479f3d8448574decda94e01))
* Process features in parallel ([2c41155](https://github.com/SocialGouv/graal/commit/2c4115562d275576a60c8c0be749564f37f13fde))
* Start adding processing configuration to the UI ([a7ac18d](https://github.com/SocialGouv/graal/commit/a7ac18d7eda2b7cae4b84559ec3f830ff262688f))
* Summary feature ([ed609d3](https://github.com/SocialGouv/graal/commit/ed609d3e6617b9eabc30c141824dfad196a8a715))
* **attrib:** Allow multiple users to be assigned to the same program ([4880924](https://github.com/SocialGouv/graal/commit/4880924d8917e122d629822c4b34b04ff6fd7eef))
* **attribution:** Also match on program numbers for credit table matching ([f7df2c9](https://github.com/SocialGouv/graal/commit/f7df2c9631d149fbae14b69d0a50a736a1db1aff))
* **attribution:** Handle mutliple tables in credit table matching ([1060b69](https://github.com/SocialGouv/graal/commit/1060b69743ac508e221a9156121064228a5a955f))
* **attribution:** Handle second credit table format for PLF ([8ccd865](https://github.com/SocialGouv/graal/commit/8ccd865e449cc531f52942f4a48ebc26ccd1d1b5))
* **clustering:** Add clustering service to gather common code between allotment and similarity within lecture ([886ce48](https://github.com/SocialGouv/graal/commit/886ce482bbd3658a5152ea1a7c5cf26a4e3533d6))
* **simil_DB:** Add config file validation ([e295b7a](https://github.com/SocialGouv/graal/commit/e295b7af9885d77e8ffea1aca70672a086dbde65))
* **summary:** summary generation can avoid overwriting existing "Objet amdt" ([a929a47](https://github.com/SocialGouv/graal/commit/a929a47d1046e4106e0d3448c1a6bad8119dd601))
* Allow for specifying multiple missions to filter by ([84d5152](https://github.com/SocialGouv/graal/commit/84d5152e98cc6cf580fbb04b245502219f9424ec))
* Take Entité Pilote into account and use new configuration file ([ad03ef0](https://github.com/SocialGouv/graal/commit/ad03ef0eccc7aa2b4e64fd22509382f3c944ddf3))
* **similarity:** Add `column_filtering_funcs` to filter out some amdts when needed ([b54a847](https://github.com/SocialGouv/graal/commit/b54a84752a23d9bb93a7bb6907da6f895c88c427))
* Adjust prompt to shorten summaries and add prompt to re-summarize long ones ([e4f3adc](https://github.com/SocialGouv/graal/commit/e4f3adcccd05f7d9a3050460f12b587d68493a2e))
* Analyze both body and expose for keyword matching in attribution ([e4f4d06](https://github.com/SocialGouv/graal/commit/e4f4d069933a4463bcaa8e409b2727d801e364b9))
* docker ([#36](https://github.com/SocialGouv/graal/issues/36)) ([fb801e2](https://github.com/SocialGouv/graal/commit/fb801e23f263a139be9f0dd1a9d2b7e4f9be8c96))
* Give priority to "Défavorable" opinions in allotments ([3e5737e](https://github.com/SocialGouv/graal/commit/3e5737e03cd43419d132cb85c9955894df2f33e2))
* Ignore some sentences starting with a specific pattern ([b4c97ff](https://github.com/SocialGouv/graal/commit/b4c97ff17315177e0609e1ec7cf73feca1b38b2c))
* Make summary prompt come from config file ([b657d1b](https://github.com/SocialGouv/graal/commit/b657d1be230b2db88d1c792165d4e7efda7ed9a8))
* **similarity:** Handle deltas in project date display ([63c95e5](https://github.com/SocialGouv/graal/commit/63c95e538efbe2fb8749789524d7f566c3e18b47))
* Add "Sort copié : XXX" to comment in similarity search if applicable ([aaae3c8](https://github.com/SocialGouv/graal/commit/aaae3c81ace5b2078195cc9849cb7df6f5f8b4b5))
* Add a fake LLM API client that generates random strings for testing ([e856562](https://github.com/SocialGouv/graal/commit/e8565626e5e22a094558c9e788560ddb651efdf0))
* Add allotment to full pipeline ([68de3bd](https://github.com/SocialGouv/graal/commit/68de3bdd332da071adc2c31fe871d5f2e675711d))
* Add AmendmentCopier class to copy best matching amendment to new one ([ce752e6](https://github.com/SocialGouv/graal/commit/ce752e6c3bd9075f46fa196c9913959b3355fa8e))
* Add attribution through codes and articles ([8ae99db](https://github.com/SocialGouv/graal/commit/8ae99dbec835a0dade3a395f7cf482f723c9f45c))
* Add attribution to full pipeline ([25650fc](https://github.com/SocialGouv/graal/commit/25650fc6a78ab57f79d5e39b876fea1059fe6884))
* Add auth to LLMInferenceAPIClient ([441b8ff](https://github.com/SocialGouv/graal/commit/441b8ffb24eb89cebdc91b3c83f353a9e9fd6e9f))
* Add comment for default attribution ([8b227c4](https://github.com/SocialGouv/graal/commit/8b227c487b62dbf25ccc4b08c08d0478c582fda9))
* Add digitization of numbers written in plain text ([cf310df](https://github.com/SocialGouv/graal/commit/cf310df92be2ef2c1a62501fc7780b67b1866664))
* Add Groq and LLMInference clients ([18b738b](https://github.com/SocialGouv/graal/commit/18b738b598e3139bf6e75680e6c3ad75ccef036c))
* Add LLMInferenceAPIClient example usage to full_pipeline ([bc7c516](https://github.com/SocialGouv/graal/commit/bc7c516fb22389dc31dd227f02eecfd6bc069675))
* Add opinion populator + script + full pipeline ([bec4cbc](https://github.com/SocialGouv/graal/commit/bec4cbcf19097f62196d20668bd10eee2ec56622))
* Add option to enable/disable ignoring interstitial amdts ([065f60b](https://github.com/SocialGouv/graal/commit/065f60b06d158424a985e433d6b93c0e6dafe6bd))
* Add PLFSSAllotmentUpdater to update the "Allotissement" column of the PLFSS with found clusters ([dc324fe](https://github.com/SocialGouv/graal/commit/dc324fe088058eea346db77309468db324ed1bad))
* Add PLFSSClusterFinder to find clusters of quasi-identical amendments within a PLFSS ([992677c](https://github.com/SocialGouv/graal/commit/992677c22c448e22d71032fdae9a7e3f9a475e46))
* Add PLFSSDataProcessor to load a PLFSS and preprocess its columns ([72efada](https://github.com/SocialGouv/graal/commit/72efada8b160b3fd7d21867ee1615213247e1a86))
* Add populate_allotments.py script that will run the full allotment flow for a PLFSS ([d63cfd4](https://github.com/SocialGouv/graal/commit/d63cfd481cd1227bfe407227a35b487c32a55867))
* Add possibility to provide an amdt removal strategy for filter_amdts_to_keep_one_per_allotment ([2ff6a08](https://github.com/SocialGouv/graal/commit/2ff6a086b6854f29e706ed3fb2bd3ceea31a62c3))
* Add prompt builder for amendment summarization ([264f9d5](https://github.com/SocialGouv/graal/commit/264f9d5193d04f07bf4eac494887f9518d9697c5))
* Add retries to AmendmentSummarizer on LLM API calls ([aeec168](https://github.com/SocialGouv/graal/commit/aeec1680c1da83b29c56da6db34856653df695ae))
* Add script for DFAS summary generation test ([502e975](https://github.com/SocialGouv/graal/commit/502e9757cd4c2759ca72acead3e320b68fbd0d07))
* Add scripts to work with vLLM instance ([34e04a8](https://github.com/SocialGouv/graal/commit/34e04a8d0b0a96e36c786856e678ae0c29b8348d))
* Add similarity search to full pipeline ([ba698a3](https://github.com/SocialGouv/graal/commit/ba698a35ff20dd2606d72bd3f153b32777334cfe))
* Add some info to the comment column for similarity finding and make use of new amdt_idx ([808d9dc](https://github.com/SocialGouv/graal/commit/808d9dc8bee5653e8942ea8028f22e0aa8d66dfb))
* Add stopwords, digitization and remove plurals to normalize_text ([43ee698](https://github.com/SocialGouv/graal/commit/43ee698ee41fb85a7d95c4715d96b00ef1363beb))
* Add summarization to full pipeline ([7b4f777](https://github.com/SocialGouv/graal/commit/7b4f777bf5ce5455b50759ec3cdc42505256378b))
* Add support for EtalabAPIClient ([af3413d](https://github.com/SocialGouv/graal/commit/af3413d7f961af750fdb652d2d0d16c50badc673))
* Add support for loading more than one PLFSS files ([356dd04](https://github.com/SocialGouv/graal/commit/356dd0465bef3bd68778402ec4dbeb32b7751b8d))
* Add vLLM client for summary generation ([bde3563](https://github.com/SocialGouv/graal/commit/bde3563e726ff52794df03f5174f027164243d8d))
* Add where the attribution is coming from in comments ([0683ec6](https://github.com/SocialGouv/graal/commit/0683ec6032958ef9ac5ad4318b5c97063e13d27a))
* Allot old amendements in order to optimize findinf similar amdts in full pipeline ([05d0788](https://github.com/SocialGouv/graal/commit/05d07886ea64cf5adfd74e5ecc3ed0a3088f1cc2))
* Attribute amendments using codes and articles as well as keywords ([5c78c06](https://github.com/SocialGouv/graal/commit/5c78c067ee14e934ebec50a269473d53f602867b))
* Choose random value if multiple attributions and add default value if none were found. ([36979a3](https://github.com/SocialGouv/graal/commit/36979a3dccec8cedcfbcd50e37f1cfa4e4ebb621))
* Content similarity evaluator with tf-idf and damerau-levenshtein ([d756482](https://github.com/SocialGouv/graal/commit/d756482effe915c56f17d9c1e7f8952e96d647bd))
* Don't perform attribution on amdts for which "Num article" does not start with "Article add." ([fe5795a](https://github.com/SocialGouv/graal/commit/fe5795a1dd8ec07e91320a8192aab54139d24032))
* Enable loading laws and ordonnances mappings ([65d5c5b](https://github.com/SocialGouv/graal/commit/65d5c5bd916cafbc4f44c6484363cf9bf280b9d9))
* Enable loading several PLFSS JSON files with their year as additional argument ([ac9a24e](https://github.com/SocialGouv/graal/commit/ac9a24e453b8f6c6fe86297a561a2c38f71ab1be))
* Find recurrent amendments and copy their data over to matching new amendments ([6d58b28](https://github.com/SocialGouv/graal/commit/6d58b289fdfb93e93c6db0a0c78e11cba677bf6e))
* Find similar amendments from the past ([82991f4](https://github.com/SocialGouv/graal/commit/82991f461a701058e9d17f30095ca567398f7197))
* Find similarities in amendments using their summary ("Objet") ([2bbe389](https://github.com/SocialGouv/graal/commit/2bbe389d7af285fb5fc9088cf97f66b7282adfc4))
* First draft of attribution via embeddings ([9859879](https://github.com/SocialGouv/graal/commit/985987909a472397270b81daf245a15e45013099))
* Force summary to "Amendement rédactionnel." when necessary ([dd29a0b](https://github.com/SocialGouv/graal/commit/dd29a0b78b970b3f4433065fc26d8e303953ee11))
* Handle "appel" amendments by preprending "APPEL : " to the summary ([c474317](https://github.com/SocialGouv/graal/commit/c474317d9dd037a3429c24d36718f014d568580b))
* Handle common exposé amdt patterns in pre-processing ([ac09e3c](https://github.com/SocialGouv/graal/commit/ac09e3c22124dc40d58b78fc9049ba471eb4eb6a))
* Handle inadmissible amdts ([9109177](https://github.com/SocialGouv/graal/commit/91091770d99c2cefb928e11d7745a8d54eb9ab1a))
* Handle some special cases for the detection of "amendement rédactionnel" ([cd6d31c](https://github.com/SocialGouv/graal/commit/cd6d31cacfd38eff7fcad7806d441f51ae2dcdd1))
* Ignore sentences starting with "la perte de recettes pour" ([24ca63e](https://github.com/SocialGouv/graal/commit/24ca63e838ce3d8905d74f82d724e9799cfa0b98))
* Improve summary prompt building ([a9bfcf6](https://github.com/SocialGouv/graal/commit/a9bfcf631ad2bc0ab4071e807af0430acaaaa9bd))
* Jupyter notebook to work on summarizing a sample of amendments with large LLMs ([3d30e3a](https://github.com/SocialGouv/graal/commit/3d30e3ab079efebf3ce57a15ff52e33df876bcee))
* Log statistics on the ratio of attribution with multiple possibilities ([e96c62c](https://github.com/SocialGouv/graal/commit/e96c62c361b9b938b6519813ca87ba03db97e327))
* Make old amdt project of origin visible in comments for similarity ([20a2f43](https://github.com/SocialGouv/graal/commit/20a2f439818a7f113c13116421837a494eb9cb75))
* Make use of allotment optimization in full pipeline and populate allotments scripts ([9e72046](https://github.com/SocialGouv/graal/commit/9e720465ed2b92a9d23ac23c3ca832f267c303eb))
* Normalize the amendment text injected into the prompt for summarization ([083ac8e](https://github.com/SocialGouv/graal/commit/083ac8e2a4b623a44f01a9696e76747819decf4d))
* PLFSS text processor ([502e87d](https://github.com/SocialGouv/graal/commit/502e87dcd198d831eabb6104b9954bd0d0ecf3b0))
* Populate allotments using TF-IDF and DBSCAN ([e7aa0eb](https://github.com/SocialGouv/graal/commit/e7aa0ebe52455682485538b4107c7b55f6a7093e))
* Remove sentences starting with "la perte de recettes pour" in attribution ([36a918f](https://github.com/SocialGouv/graal/commit/36a918ffc5e0966d363bccbeeb1e6f6a914f3135))
* Remove sentences starting with XXX when normalizing PLFSS ([44edd75](https://github.com/SocialGouv/graal/commit/44edd7510669397da437e88db3cfceefcf8c4ca5))
* Remove small roman numerals when normalizing the PLFSS ([a50ad12](https://github.com/SocialGouv/graal/commit/a50ad12018389dc20b000afb5e16f1720a7035a5))
* Remove the use of resumes in similarity finding ([e955563](https://github.com/SocialGouv/graal/commit/e95556375b6414de7950f2a1211ddb8d2efb477a))
* Replace acronyms in the attribution keywords dictionary ([291e698](https://github.com/SocialGouv/graal/commit/291e69808c8345da1c0dae7fe2d7bdd0195b0184))
* Replace acronyms with their full text in similarity, allotment and summary ([334e3f0](https://github.com/SocialGouv/graal/commit/334e3f086bc51d8caa01cbff75a3fc9be9bc1d7b))
* Rerun summaries that are too long ([a643a56](https://github.com/SocialGouv/graal/commit/a643a56213b6242a9a9523fb97d3448f5fdd294e))
* Summarize whole plfss with vLLM running on OVH ([52f8573](https://github.com/SocialGouv/graal/commit/52f85734e3faf26eb4517b81bd7d95a2f53ec529))
* Support default attribution and email in attribution ([a43b83f](https://github.com/SocialGouv/graal/commit/a43b83f8856ce2c81521ed0415ef0cd1a65aaba7))
* Text processing to remove stop words and plurals ([75e1db6](https://github.com/SocialGouv/graal/commit/75e1db629a3f9a9d81a45aab97e231082b76f19c))
* Text utils to normalize PLFSS text and extract plain text from HTML ([47674a6](https://github.com/SocialGouv/graal/commit/47674a6afa8ad9c1fb573dfd2934da7b58995f36))
* Transform "Supprimer l'article liminaire." into "Supprimer cet article" ([2d91de5](https://github.com/SocialGouv/graal/commit/2d91de5da2cfbc45e457c5fe5199b9eb40e10c38))
* Use a different similarity threshold for some specific Exposé amdt when finding similarities ([c5499be](https://github.com/SocialGouv/graal/commit/c5499be0fe4081aebfa9645363735416943778ab))
* Use a load balancer for summary generation between several clients ([b408014](https://github.com/SocialGouv/graal/commit/b408014864d44a1c2728dc85760f73e436e28baf))
* Use date_dernier_modif's timestamp instead of manually entering year ([6ed92e9](https://github.com/SocialGouv/graal/commit/6ed92e974d7b64297efdefb4393f2fefac07dda3))
* Use several clients for summary generation ([7f97602](https://github.com/SocialGouv/graal/commit/7f97602d0e5896c42516201ccec83dcea435e5db))

# [1.0.0-beta.3](https://github.com/SocialGouv/graal/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2025-10-09)


### Bug Fixes

* Actually connect frontend configuration to backend processing ([1526ca2](https://github.com/SocialGouv/graal/commit/1526ca28eecfc0fb0f13fe271757a7e8f8dc4347))


### Features

* Add a processing configuration to API + UI ([709384b](https://github.com/SocialGouv/graal/commit/709384b9897deb2bd2cd324171cc46bdf901519a))
* Add Allotment config drop down ([8169a94](https://github.com/SocialGouv/graal/commit/8169a945098786798e9331f1e812e15a4c26a42c))
* Add columns to copy and threshold slider components ([9bb5044](https://github.com/SocialGouv/graal/commit/9bb5044ded4fe7b57425a50e017f3b7e01d196b5))
* Add configs to similarity search ([9db35b9](https://github.com/SocialGouv/graal/commit/9db35b95dc096ca234390203370e46ad53ae945a))
* Start adding processing configuration to the UI ([a7ac18d](https://github.com/SocialGouv/graal/commit/a7ac18d7eda2b7cae4b84559ec3f830ff262688f))

# [1.0.0-beta.2](https://github.com/SocialGouv/graal/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2025-10-08)


### Bug Fixes

* images tag ([4eacbdd](https://github.com/SocialGouv/graal/commit/4eacbdd1873b3238fa2000ebf1a1b94234112607))

# 1.0.0-beta.1 (2025-10-08)


### Bug Fixes

* Attribution and text utils tests ([a205af2](https://github.com/SocialGouv/graal/commit/a205af2442807e15f57f7f714c84a3289d983c07))
* Attribution tests for attribution ([b8a00f1](https://github.com/SocialGouv/graal/commit/b8a00f102440e1cc4ad54e5cc95bd5c304969a2b))
* Attribution through redactional amdts ([94c0e94](https://github.com/SocialGouv/graal/commit/94c0e949081c0fc9a8e5d9cfbe92c094de7ce325))
* Await file writing in web processing service ([1290078](https://github.com/SocialGouv/graal/commit/12900788a8a6d330ce7dc259d533933154ef540b))
* Better detection of redactional amdts ([e24c29a](https://github.com/SocialGouv/graal/commit/e24c29a8f6a6004bf057e9bf130430f07d465559))
* Choose head of allotment that contains non-default attribution if possible ([95e769e](https://github.com/SocialGouv/graal/commit/95e769eea5489ba734d53be6d0c087755990639c))
* Correct similarity thresholds in InadmissibleAmendmentHandler ([df81d49](https://github.com/SocialGouv/graal/commit/df81d496980e6a6dd050a4e99c91e498748673b6))
* Default config and csv filename matching ([e5318a3](https://github.com/SocialGouv/graal/commit/e5318a30b0314befd10dc9684aaddc223df75461))
* Don't preprocess response text for similarity search ([937d78a](https://github.com/SocialGouv/graal/commit/937d78a22a569e67c2720ede53f4f412c1006495))
* Handle "Rédactionnel" exposé des motifs ([3307002](https://github.com/SocialGouv/graal/commit/33070029403ffc3778dd713a581eb5ae42915943))
* int casting in credit table matching ([4762158](https://github.com/SocialGouv/graal/commit/4762158d3dfd6d3d78a89bfe02358f48b952080e))
* Keyword attribution was ignoring a large number of possibilities ([539ef38](https://github.com/SocialGouv/graal/commit/539ef38a7b978b2139c27ed86e24a8dcfc4b3a09))
* lowercase names in attribution data loader ([0029625](https://github.com/SocialGouv/graal/commit/0029625ae6ee56ae92dce3f6d437b6666a36a049))
* Make sure `AmendmentPreview` is properly built ([4827e62](https://github.com/SocialGouv/graal/commit/4827e62ef18ad3813d055c599c71b63b34ce655a))
* Preprocessing issues for attribution ([4a228d2](https://github.com/SocialGouv/graal/commit/4a228d23136aec52765194a9bcdf0b59aafb556b))
* Remove gages in similarity DB ([25d588f](https://github.com/SocialGouv/graal/commit/25d588f173a360137e313ebd289c8c8e3fef2f53))
* Renamed `handle_common_amendment_expose_and_redactional` ([3619f29](https://github.com/SocialGouv/graal/commit/3619f29fdc720c83459d9740b60f8586b6dc3d35))
* Robust JSON loading ([81aa4aa](https://github.com/SocialGouv/graal/commit/81aa4aa682cddcd06434e0a5cb90a6b1282c0a56))
* Small errors around "mission_titre_court" ([1c654ea](https://github.com/SocialGouv/graal/commit/1c654ea1d558dc123772d18f91697056e9a65cdc))
* Stop breaking when a column doesn't exist initially ([46d6aed](https://github.com/SocialGouv/graal/commit/46d6aed0fb96e65aeced2f0489c8e48234667780))
* Stop double error alert from showing up on FileUpload issue ([6c86f8e](https://github.com/SocialGouv/graal/commit/6c86f8ee0f4cf8e65bfd50958f5f0e113c6c2743))
* Stop unidecoding before generating summaries ([ab54e74](https://github.com/SocialGouv/graal/commit/ab54e74d821be7af00ca093b9e08c5add3b1fed3))
* Tests for attribution loader ([d643e22](https://github.com/SocialGouv/graal/commit/d643e2274eb03137db096df3c4317880daaa0271))
* Trigger file handling with file browser ([42a8dde](https://github.com/SocialGouv/graal/commit/42a8dde08fbaaa0ce0ef8fcaec2c41b266d95475))
* **allotment:** Make allotment column configurable ([fed415f](https://github.com/SocialGouv/graal/commit/fed415f7dd74d94a4c2b092efd4f7c58a5f2d4db))
* **attrib:** Better parsing of potential numbers in column "Nº Programe" ([f2ec844](https://github.com/SocialGouv/graal/commit/f2ec84423ca747dcbc1d362b6270c4bf19b7603f))
* **attrib PLF:** Use "Autorisations d’engagement" instead of "Crédits de paiement" ([01fb08e](https://github.com/SocialGouv/graal/commit/01fb08ec9cddb070f226b5cb0807ab3744ff0682))
* **attribution:** Bug with punctuation and keyword matching ([f96b743](https://github.com/SocialGouv/graal/commit/f96b7438847958941377b927d857a98550076866))
* **similarity:** Activate similarity commenting even if allotment is not enabled ([cbcb038](https://github.com/SocialGouv/graal/commit/cbcb0389a0afb26c1e62b85b4cbfd1d6210aa8ba))
* **similarity:** Make column used for similarity come from config ([6957abd](https://github.com/SocialGouv/graal/commit/6957abd1d6c829cb3a944437d6b792fa4a04c92d))
* **similarity:** Mention all copied columns in amdt comment prefix ([404eac0](https://github.com/SocialGouv/graal/commit/404eac0635f2b260b6f3325d12c57d2af1560f39))
* Add acronym_mapping to all calls to load_keywords ([ed9f9aa](https://github.com/SocialGouv/graal/commit/ed9f9aaca2d3da712824af20140f5b2a7159fd03))
* Add auth for the LLMInferenceAPIClient in populate_summaries ([cc6cc1c](https://github.com/SocialGouv/graal/commit/cc6cc1c88532e97b51ec445f5f766395deac03bd))
* Add import logging.config to populate_summaries ([c64872a](https://github.com/SocialGouv/graal/commit/c64872a73d0bad45c03ae54fc2afd5e1e8d89d41))
* Add queue timeout to SummaryGenerationLoadBalancer instances ([d22d9e5](https://github.com/SocialGouv/graal/commit/d22d9e5905774065973f3605f31fe7a527fcad6a))
* Allotment handler was removing data for non-allocated amdts ([d2a226d](https://github.com/SocialGouv/graal/commit/d2a226db79b38aa85246284690d8d2436cdcffac))
* Attribution was using the wrong patterns for law and ordonnance ([3a0bfb1](https://github.com/SocialGouv/graal/commit/3a0bfb162426b0788135ee1bd7e8e8773bd0f388))
* AttributionTextNormalizer was not using the right delimiter for `remove_sentences_starting_with` ([75cded6](https://github.com/SocialGouv/graal/commit/75cded62d7985d84cb7205c750e26499595f66fb))
* Better handling of interstitial amendments so the comments don't show attrib when they shouldn't ([4a2816e](https://github.com/SocialGouv/graal/commit/4a2816e9933681fbd99bd915f87430a6e8eda322))
* Change some summary generation parameters to avoid Timeouts ([ede6fe8](https://github.com/SocialGouv/graal/commit/ede6fe8fda4ff15bc1ebc06b6489d6afbbd8acd6))
* Consider "Affectation (nom)" as empty also when it is None (not just empty list) ([79d5829](https://github.com/SocialGouv/graal/commit/79d58293d17839e5150f8c830dcf6f811b6e9258))
* Don't add a /n in front of similarity comment if it was previously empty ([f1ff966](https://github.com/SocialGouv/graal/commit/f1ff9660e51ef6ed07c504e693ef4f8fe16b0734))
* Ensure missing timestamps are replaced with sane defaults ([a0e60e8](https://github.com/SocialGouv/graal/commit/a0e60e8f4fe5c1c6e777068fba89833d174dbd04))
* Ensure that the similarity comment does not override information already in that column "Commentaires" ([2e32d1a](https://github.com/SocialGouv/graal/commit/2e32d1a491d85d19da299107ce6b7afbf376e8b0))
* Fix "loi" being written as "law" in its enum. Also small improvement on AttributionPopulator ([82602db](https://github.com/SocialGouv/graal/commit/82602dbd7152c70faa52261115a6b258073a46b6))
* Fix attributor integration test with new pre-processor static methods ([98896fe](https://github.com/SocialGouv/graal/commit/98896feac8717e1f014902764638dfb8e41b86a5))
* Fix retry logic looping infinitely. Also added tests for it ([ca46e9f](https://github.com/SocialGouv/graal/commit/ca46e9f7226f8b4e369872dd8b591b361b86adff))
* Gard against nan in keyword matches for attribution ([dd87828](https://github.com/SocialGouv/graal/commit/dd878286a7eee7096aec12da81d17871dafddf5a))
* Handle the case where no similarity is found to avoid division by zero error ([b2999b0](https://github.com/SocialGouv/graal/commit/b2999b0ac141788fdc5cdb1977d175d0b2455df0))
* Handling nan in keyword attribution ([390fe56](https://github.com/SocialGouv/graal/commit/390fe56374530cc0a692d2c6ef500f4127fac36b))
* Ignore "la perte de recettes" instead of "la perte de recettes pour" ([9cf4a62](https://github.com/SocialGouv/graal/commit/9cf4a62e38a32602ae051085f3e556923bfc6349))
* Index out of bound for stop index in summary generation ([59a4511](https://github.com/SocialGouv/graal/commit/59a451154b5385db0b38a4cd1a4cc0528fa83c58))
* Make AmendmentSummarizer use amdt_idx instead of row_idx ([3dab3d8](https://github.com/SocialGouv/graal/commit/3dab3d8f1e7ccbec1a0ce49ff6fe8f661bac31a6))
* Make small fixes here and there ([f7c3e5a](https://github.com/SocialGouv/graal/commit/f7c3e5ad71213f4d8b0708a9e9e2a14ef346ceab))
* Make sure the Commentaires column contains at least the empty string in similarity ([3ac1d5f](https://github.com/SocialGouv/graal/commit/3ac1d5fe46c0abdc4362459a5739d6378cee384e))
* Merging signale and full pipeline result would overwrite when signale value was empty ([bd5bbfa](https://github.com/SocialGouv/graal/commit/bd5bbfaccc72fbd4cf0f537d42858dc920c5521b))
* Move replace_acronyms calls in the right positions ([81f5ed0](https://github.com/SocialGouv/graal/commit/81f5ed0baf3f415243e0c282a596155a2533f2a1))
* Populate allotments' integration test was broken following new refactor ([3e687a6](https://github.com/SocialGouv/graal/commit/3e687a605095e9df6475d12f44706d7f16de7319))
* Remove forced removal of codes and ordonnances that was used for testing ([d98c98a](https://github.com/SocialGouv/graal/commit/d98c98a0524c4928fc6ad922a06938f00f3960e6))
* Sentence removal will not remove delimiters anymore ([ec0409b](https://github.com/SocialGouv/graal/commit/ec0409bfa0f7afc853378bbefaa7424344d561be))
* Similarity around amdt body was not filtered properly ([bab814f](https://github.com/SocialGouv/graal/commit/bab814fb2eea14a24a634f17f60087b09ae2f171))
* SimilarityHandler preprocessing was removing Réponse and Sort from old_amendements_df ([535ad47](https://github.com/SocialGouv/graal/commit/535ad47a7e0a5357da8f3016503505911d866b0e))
* Stop failing if "nan" does not exist in articles set for attribution ([479340f](https://github.com/SocialGouv/graal/commit/479340f538a8435b9b9bddea5c8826c91476128e))
* Stop index not being used and misc tiny improvements ([7547272](https://github.com/SocialGouv/graal/commit/7547272261d7073bec0c74550e152e932b414f6c))
* Stop looking at attribution once a single candidate was found ([e1145b0](https://github.com/SocialGouv/graal/commit/e1145b0b90d140c2a929c036b9ba3f87f8a14dbd))
* Typo on "Défault" instead of "Défaut" ([d884050](https://github.com/SocialGouv/graal/commit/d8840508fdc109a97c196c9e12dad3cde264aafd))
* Use amdt_idx to copy matches between old and new PLFSS ([97d010f](https://github.com/SocialGouv/graal/commit/97d010f7b9d6375fe0d2951b969ed65dca30886f))
* Use loc in remove_empty_rows_for_given_columns to avoid setting value on df vue ([6027a5e](https://github.com/SocialGouv/graal/commit/6027a5e508c8e4767a5153502bae6a7af68ed6cd))
* Wrong import in full pipeline ([c84fa8a](https://github.com/SocialGouv/graal/commit/c84fa8a2d86dd20667865b1d2b0941c6a1ae65fa))


### Features

* Add "Sort copié : XXX" to comment in similarity search if applicable ([aaae3c8](https://github.com/SocialGouv/graal/commit/aaae3c81ace5b2078195cc9849cb7df6f5f8b4b5))
* Add a "Commencer le traitement" button ([0dd0809](https://github.com/SocialGouv/graal/commit/0dd08098e98fae3573e47e3c7e3bce7cfd320984))
* Add a fake LLM API client that generates random strings for testing ([e856562](https://github.com/SocialGouv/graal/commit/e8565626e5e22a094558c9e788560ddb651efdf0))
* Add a web API for GRAAL processing pipeline ([d2bc1ec](https://github.com/SocialGouv/graal/commit/d2bc1ecdb18b6c6311584d82fe434226beaee766))
* Add ability to preprocess old amdts from an excel file ([12d438c](https://github.com/SocialGouv/graal/commit/12d438cba93b60d510c551a3e39e2e0cf57d8b57))
* Add ability to preserve values already filled in through feature flag ([7657aa1](https://github.com/SocialGouv/graal/commit/7657aa191400fb0017082217c2497ad42b3b898f))
* Add allotment feature ([207b007](https://github.com/SocialGouv/graal/commit/207b0077ff49c9200b689972766b0ebe97585784))
* Add allotment to full pipeline ([68de3bd](https://github.com/SocialGouv/graal/commit/68de3bdd332da071adc2c31fe871d5f2e675711d))
* Add AmendmentCopier class to copy best matching amendment to new one ([ce752e6](https://github.com/SocialGouv/graal/commit/ce752e6c3bd9075f46fa196c9913959b3355fa8e))
* Add attribution matcher for redactional amdts ([98f6b24](https://github.com/SocialGouv/graal/commit/98f6b247815736bd0575e55859e4c4272f6fd180))
* Add attribution through codes and articles ([8ae99db](https://github.com/SocialGouv/graal/commit/8ae99dbec835a0dade3a395f7cf482f723c9f45c))
* Add attribution to full pipeline ([25650fc](https://github.com/SocialGouv/graal/commit/25650fc6a78ab57f79d5e39b876fea1059fe6884))
* Add auth to LLMInferenceAPIClient ([441b8ff](https://github.com/SocialGouv/graal/commit/441b8ffb24eb89cebdc91b3c83f353a9e9fd6e9f))
* Add auth to OllamaAPIClient ([58cc550](https://github.com/SocialGouv/graal/commit/58cc55009956aa9b9ec5debc4d538ba408989dca))
* Add automatic frontend type generation to match backend FastAPI ([c1e0207](https://github.com/SocialGouv/graal/commit/c1e0207c70b816b71c1e1a605b07a2dff55f96d7))
* Add BlindEvalProject to build excel files for LLM evaluation in summary gen ([faae675](https://github.com/SocialGouv/graal/commit/faae6750bda62fd74746c0a0a4b560adde8ddcfc))
* Add ChatGPTAPIClient ([58a43ef](https://github.com/SocialGouv/graal/commit/58a43ef5b46ea136827164bf34707787ca2d8b34))
* Add comment for default attribution ([8b227c4](https://github.com/SocialGouv/graal/commit/8b227c487b62dbf25ccc4b08c08d0478c582fda9))
* Add digitization of numbers written in plain text ([cf310df](https://github.com/SocialGouv/graal/commit/cf310df92be2ef2c1a62501fc7780b67b1866664))
* Add early stage of uploading file for processing ([8b37065](https://github.com/SocialGouv/graal/commit/8b37065345c6d8b7808e165f2038982363374989))
* Add feature flag for attribution of interstitial amdts only ([ba5efc2](https://github.com/SocialGouv/graal/commit/ba5efc285890550e9def17cbcb49e0bdcd975f34))
* Add feature flag for generating placeholder amdt bodies ([8830394](https://github.com/SocialGouv/graal/commit/883039431de6fe47c08c2af264048c1065d5435e))
* Add Groq and LLMInference clients ([18b738b](https://github.com/SocialGouv/graal/commit/18b738b598e3139bf6e75680e6c3ad75ccef036c))
* Add inadmissible handling to full pipeline ([060733d](https://github.com/SocialGouv/graal/commit/060733df37fd57fe68477a43a44c4c187d8b1961))
* Add LLaMaAPI client ([0faf36e](https://github.com/SocialGouv/graal/commit/0faf36e3afdc01ddad1769e6a5a0c5d9aa6d65c9))
* Add LLMInferenceAPIClient example usage to full_pipeline ([bc7c516](https://github.com/SocialGouv/graal/commit/bc7c516fb22389dc31dd227f02eecfd6bc069675))
* Add new config "mission_titre_court_filter" ([a21631b](https://github.com/SocialGouv/graal/commit/a21631b5a8429e09f17805d3d1f448f97da0dc52))
* Add new config preprocessor for GRAAL pipeline ([2b3c837](https://github.com/SocialGouv/graal/commit/2b3c8374c7d6f7f3ed989a12a0877dc0985c1df0))
* Add OllamaAPIClient ([12295ef](https://github.com/SocialGouv/graal/commit/12295ef205e16a1ec0e5aecc37200785e3f5ef3a))
* Add opinion feature ([ea491c4](https://github.com/SocialGouv/graal/commit/ea491c477874a04b40ec0374fe670127d2af8b6e))
* Add opinion populator + script + full pipeline ([bec4cbc](https://github.com/SocialGouv/graal/commit/bec4cbcf19097f62196d20668bd10eee2ec56622))
* Add option to enable/disable ignoring interstitial amdts ([065f60b](https://github.com/SocialGouv/graal/commit/065f60b06d158424a985e433d6b93c0e6dafe6bd))
* Add origin project parameter to the UI ([0c4620d](https://github.com/SocialGouv/graal/commit/0c4620dd7fd0afeddac7da33abd7dc725f8dc7f9))
* Add pipeline orchestrator ([5a25c0a](https://github.com/SocialGouv/graal/commit/5a25c0a033c9463ba109142899eef9cf19025577))
* Add PLFSSAllotmentUpdater to update the "Allotissement" column of the PLFSS with found clusters ([dc324fe](https://github.com/SocialGouv/graal/commit/dc324fe088058eea346db77309468db324ed1bad))
* Add PLFSSClusterFinder to find clusters of quasi-identical amendments within a PLFSS ([992677c](https://github.com/SocialGouv/graal/commit/992677c22c448e22d71032fdae9a7e3f9a475e46))
* Add PLFSSDataProcessor to load a PLFSS and preprocess its columns ([72efada](https://github.com/SocialGouv/graal/commit/72efada8b160b3fd7d21867ee1615213247e1a86))
* Add populate_allotments.py script that will run the full allotment flow for a PLFSS ([d63cfd4](https://github.com/SocialGouv/graal/commit/d63cfd481cd1227bfe407227a35b487c32a55867))
* Add possibility to provide an amdt removal strategy for filter_amdts_to_keep_one_per_allotment ([2ff6a08](https://github.com/SocialGouv/graal/commit/2ff6a086b6854f29e706ed3fb2bd3ceea31a62c3))
* Add prompt builder for amendment summarization ([264f9d5](https://github.com/SocialGouv/graal/commit/264f9d5193d04f07bf4eac494887f9518d9697c5))
* Add rate limiting implementations ([87abc5c](https://github.com/SocialGouv/graal/commit/87abc5c61660a56c799ae7763af4b6d11bbb1a45))
* Add rate limiting in BlinEvalProject ([deedef2](https://github.com/SocialGouv/graal/commit/deedef280b37f5ba19e6f23cfa857a59c2ccdc65))
* Add retries to AmendmentSummarizer on LLM API calls ([aeec168](https://github.com/SocialGouv/graal/commit/aeec1680c1da83b29c56da6db34856653df695ae))
* Add s3 file upload script ([cbae09e](https://github.com/SocialGouv/graal/commit/cbae09ebc661e2365f278e3fd19d011da407058b))
* Add script for DFAS summary generation test ([502e975](https://github.com/SocialGouv/graal/commit/502e9757cd4c2759ca72acead3e320b68fbd0d07))
* Add script to merge work already done in Signale with result of full pipeline ([db08a6b](https://github.com/SocialGouv/graal/commit/db08a6b3f6173df8bbe65f81eecc604cf1ab74eb))
* Add scripts to work with vLLM instance ([34e04a8](https://github.com/SocialGouv/graal/commit/34e04a8d0b0a96e36c786856e678ae0c29b8348d))
* Add similarity finding on "Corps amdt" in full pipeline ([963a409](https://github.com/SocialGouv/graal/commit/963a409c6c06dde4ebc79d0af15fcb795f3245ac))
* Add similarity search feature ([aad51cd](https://github.com/SocialGouv/graal/commit/aad51cd84bbab296b9f28f8ff86ccd5314abd58c))
* Add similarity search to full pipeline ([ba698a3](https://github.com/SocialGouv/graal/commit/ba698a35ff20dd2606d72bd3f153b32777334cfe))
* Add some info to the comment column for similarity finding and make use of new amdt_idx ([808d9dc](https://github.com/SocialGouv/graal/commit/808d9dc8bee5653e8942ea8028f22e0aa8d66dfb))
* Add stopwords, digitization and remove plurals to normalize_text ([43ee698](https://github.com/SocialGouv/graal/commit/43ee698ee41fb85a7d95c4715d96b00ef1363beb))
* Add summarization to full pipeline ([7b4f777](https://github.com/SocialGouv/graal/commit/7b4f777bf5ce5455b50759ec3cdc42505256378b))
* Add support for EtalabAPIClient ([af3413d](https://github.com/SocialGouv/graal/commit/af3413d7f961af750fdb652d2d0d16c50badc673))
* Add support for laws and ordonnances in attribution ([3c04976](https://github.com/SocialGouv/graal/commit/3c04976e2f5e29f0fed4aca95e06faedebddae3b))
* Add support for loading more than one PLFSS files ([356dd04](https://github.com/SocialGouv/graal/commit/356dd0465bef3bd68778402ec4dbeb32b7751b8d))
* Add timeout param to AlbertAPI client ([504bc56](https://github.com/SocialGouv/graal/commit/504bc567b267ac1512f79fba72d290be81f71d32))
* Add vLLM client for summary generation ([bde3563](https://github.com/SocialGouv/graal/commit/bde3563e726ff52794df03f5174f027164243d8d))
* Add where the attribution is coming from in comments ([0683ec6](https://github.com/SocialGouv/graal/commit/0683ec6032958ef9ac5ad4318b5c97063e13d27a))
* Allot old amendements in order to optimize findinf similar amdts in full pipeline ([05d0788](https://github.com/SocialGouv/graal/commit/05d07886ea64cf5adfd74e5ecc3ed0a3088f1cc2))
* Allow for specifying multiple missions to filter by ([84d5152](https://github.com/SocialGouv/graal/commit/84d5152e98cc6cf580fbb04b245502219f9424ec))
* Attribute amendments using codes and articles as well as keywords ([5c78c06](https://github.com/SocialGouv/graal/commit/5c78c067ee14e934ebec50a269473d53f602867b))
* Bettwer keyword matcher for exact sentence matching ([9d234f5](https://github.com/SocialGouv/graal/commit/9d234f536a49f99fc582f7232a04acbec85c9d1e))
* Choose random value if multiple attributions and add default value if none were found. ([36979a3](https://github.com/SocialGouv/graal/commit/36979a3dccec8cedcfbcd50e37f1cfa4e4ebb621))
* Content similarity evaluator with tf-idf and damerau-levenshtein ([d756482](https://github.com/SocialGouv/graal/commit/d756482effe915c56f17d9c1e7f8952e96d647bd))
* Don't perform attribution on amdts for which "Num article" does not start with "Article add." ([fe5795a](https://github.com/SocialGouv/graal/commit/fe5795a1dd8ec07e91320a8192aab54139d24032))
* Enable downloading an excel file at end of processing ([c95846b](https://github.com/SocialGouv/graal/commit/c95846bf398482b3ebb6133fc4c1c1398ba1992e))
* Enable loading several PLFSS JSON files with their year as additional argument ([ac9a24e](https://github.com/SocialGouv/graal/commit/ac9a24e453b8f6c6fe86297a561a2c38f71ab1be))
* Find recurrent amendments and copy their data over to matching new amendments ([6d58b28](https://github.com/SocialGouv/graal/commit/6d58b289fdfb93e93c6db0a0c78e11cba677bf6e))
* Find similar amendments from the past ([82991f4](https://github.com/SocialGouv/graal/commit/82991f461a701058e9d17f30095ca567398f7197))
* Find similarities in amendments using their summary ("Objet") ([2bbe389](https://github.com/SocialGouv/graal/commit/2bbe389d7af285fb5fc9088cf97f66b7282adfc4))
* First draft of attribution via embeddings ([9859879](https://github.com/SocialGouv/graal/commit/985987909a472397270b81daf245a15e45013099))
* Force summary to "Amendement rédactionnel." when necessary ([dd29a0b](https://github.com/SocialGouv/graal/commit/dd29a0b78b970b3f4433065fc26d8e303953ee11))
* Handle "appel" amendments by preprending "APPEL : " to the summary ([c474317](https://github.com/SocialGouv/graal/commit/c474317d9dd037a3429c24d36718f014d568580b))
* Handle common exposé amdt patterns in pre-processing ([ac09e3c](https://github.com/SocialGouv/graal/commit/ac09e3c22124dc40d58b78fc9049ba471eb4eb6a))
* Handle some special cases for the detection of "amendement rédactionnel" ([cd6d31c](https://github.com/SocialGouv/graal/commit/cd6d31cacfd38eff7fcad7806d441f51ae2dcdd1))
* Ignore sentences starting with "la perte de recettes pour" ([24ca63e](https://github.com/SocialGouv/graal/commit/24ca63e838ce3d8905d74f82d724e9799cfa0b98))
* Implement new attribution strategy (early_exit) for PLF ([dabdfdb](https://github.com/SocialGouv/graal/commit/dabdfdb6a245b7b6cce8ff37914b38e1827c6756))
* Improve summary prompt building ([a9bfcf6](https://github.com/SocialGouv/graal/commit/a9bfcf631ad2bc0ab4071e807af0430acaaaa9bd))
* Jupyter notebook to work on summarizing a sample of amendments with large LLMs ([3d30e3a](https://github.com/SocialGouv/graal/commit/3d30e3ab079efebf3ce57a15ff52e33df876bcee))
* Log statistics on the ratio of attribution with multiple possibilities ([e96c62c](https://github.com/SocialGouv/graal/commit/e96c62c361b9b938b6519813ca87ba03db97e327))
* Make use of allotment optimization in full pipeline and populate allotments scripts ([9e72046](https://github.com/SocialGouv/graal/commit/9e720465ed2b92a9d23ac23c3ca832f267c303eb))
* Normalize the amendment text injected into the prompt for summarization ([083ac8e](https://github.com/SocialGouv/graal/commit/083ac8e2a4b623a44f01a9696e76747819decf4d))
* PLFSS text processor ([502e87d](https://github.com/SocialGouv/graal/commit/502e87dcd198d831eabb6104b9954bd0d0ecf3b0))
* Populate allotments using TF-IDF and DBSCAN ([e7aa0eb](https://github.com/SocialGouv/graal/commit/e7aa0ebe52455682485538b4107c7b55f6a7093e))
* Process features in parallel ([2c41155](https://github.com/SocialGouv/graal/commit/2c4115562d275576a60c8c0be749564f37f13fde))
* Remove sentences starting with "la perte de recettes pour" in attribution ([36a918f](https://github.com/SocialGouv/graal/commit/36a918ffc5e0966d363bccbeeb1e6f6a914f3135))
* Remove sentences starting with XXX when normalizing PLFSS ([44edd75](https://github.com/SocialGouv/graal/commit/44edd7510669397da437e88db3cfceefcf8c4ca5))
* Remove small roman numerals when normalizing the PLFSS ([a50ad12](https://github.com/SocialGouv/graal/commit/a50ad12018389dc20b000afb5e16f1720a7035a5))
* Remove the use of resumes in similarity finding ([e955563](https://github.com/SocialGouv/graal/commit/e95556375b6414de7950f2a1211ddb8d2efb477a))
* Replace acronyms in the attribution keywords dictionary ([291e698](https://github.com/SocialGouv/graal/commit/291e69808c8345da1c0dae7fe2d7bdd0195b0184))
* Replace acronyms with their full text in similarity, allotment and summary ([334e3f0](https://github.com/SocialGouv/graal/commit/334e3f086bc51d8caa01cbff75a3fc9be9bc1d7b))
* Summarize whole plfss with vLLM running on OVH ([52f8573](https://github.com/SocialGouv/graal/commit/52f85734e3faf26eb4517b81bd7d95a2f53ec529))
* Summary feature ([ed609d3](https://github.com/SocialGouv/graal/commit/ed609d3e6617b9eabc30c141824dfad196a8a715))
* **attrib:** Allow multiple users to be assigned to the same program ([4880924](https://github.com/SocialGouv/graal/commit/4880924d8917e122d629822c4b34b04ff6fd7eef))
* **attribution:** Also match on program numbers for credit table matching ([f7df2c9](https://github.com/SocialGouv/graal/commit/f7df2c9631d149fbae14b69d0a50a736a1db1aff))
* **attribution:** Handle mutliple tables in credit table matching ([1060b69](https://github.com/SocialGouv/graal/commit/1060b69743ac508e221a9156121064228a5a955f))
* **attribution:** Handle second credit table format for PLF ([8ccd865](https://github.com/SocialGouv/graal/commit/8ccd865e449cc531f52942f4a48ebc26ccd1d1b5))
* **clustering:** Add clustering service to gather common code between allotment and similarity within lecture ([886ce48](https://github.com/SocialGouv/graal/commit/886ce482bbd3658a5152ea1a7c5cf26a4e3533d6))
* **simil_DB:** Add config file validation ([e295b7a](https://github.com/SocialGouv/graal/commit/e295b7af9885d77e8ffea1aca70672a086dbde65))
* **similarity:** Add `column_filtering_funcs` to filter out some amdts when needed ([b54a847](https://github.com/SocialGouv/graal/commit/b54a84752a23d9bb93a7bb6907da6f895c88c427))
* **summary:** summary generation can avoid overwriting existing "Objet amdt" ([a929a47](https://github.com/SocialGouv/graal/commit/a929a47d1046e4106e0d3448c1a6bad8119dd601))
* Adjust prompt to shorten summaries and add prompt to re-summarize long ones ([e4f3adc](https://github.com/SocialGouv/graal/commit/e4f3adcccd05f7d9a3050460f12b587d68493a2e))
* Analyze both body and expose for keyword matching in attribution ([e4f4d06](https://github.com/SocialGouv/graal/commit/e4f4d069933a4463bcaa8e409b2727d801e364b9))
* Auto detect input file type to use the right amdt df loader ([023bccb](https://github.com/SocialGouv/graal/commit/023bccb4b5fa003c520cf887b8dc4f2fcbee3eda))
* Deprioritize empty response amdts in similarity ([0188b42](https://github.com/SocialGouv/graal/commit/0188b4242ba04fad268c6233ff4403fb9c7d8c1c))
* docker ([#36](https://github.com/SocialGouv/graal/issues/36)) ([fb801e2](https://github.com/SocialGouv/graal/commit/fb801e23f263a139be9f0dd1a9d2b7e4f9be8c96))
* Enable ignoring amdts that have already been processed ([c1993b7](https://github.com/SocialGouv/graal/commit/c1993b722b5b8d05cd02c3a879a3af884065d3e6))
* Enable loading laws and ordonnances mappings ([65d5c5b](https://github.com/SocialGouv/graal/commit/65d5c5bd916cafbc4f44c6484363cf9bf280b9d9))
* Give priority to "Défavorable" opinions in allotments ([3e5737e](https://github.com/SocialGouv/graal/commit/3e5737e03cd43419d132cb85c9955894df2f33e2))
* Handle inadmissible amdts ([9109177](https://github.com/SocialGouv/graal/commit/91091770d99c2cefb928e11d7745a8d54eb9ab1a))
* Ignore some sentences starting with a specific pattern ([b4c97ff](https://github.com/SocialGouv/graal/commit/b4c97ff17315177e0609e1ec7cf73feca1b38b2c))
* Make old amdt project of origin visible in comments for similarity ([20a2f43](https://github.com/SocialGouv/graal/commit/20a2f439818a7f113c13116421837a494eb9cb75))
* Make summary prompt come from config file ([b657d1b](https://github.com/SocialGouv/graal/commit/b657d1be230b2db88d1c792165d4e7efda7ed9a8))
* Make use of rate limiting in SummaryGenerationLoadBalancer ([926e4f2](https://github.com/SocialGouv/graal/commit/926e4f2be5292bcf1479f3d8448574decda94e01))
* Rerun summaries that are too long ([a643a56](https://github.com/SocialGouv/graal/commit/a643a56213b6242a9a9523fb97d3448f5fdd294e))
* Support default attribution and email in attribution ([a43b83f](https://github.com/SocialGouv/graal/commit/a43b83f8856ce2c81521ed0415ef0cd1a65aaba7))
* Take Entité Pilote into account and use new configuration file ([ad03ef0](https://github.com/SocialGouv/graal/commit/ad03ef0eccc7aa2b4e64fd22509382f3c944ddf3))
* **similarity:** Handle deltas in project date display ([63c95e5](https://github.com/SocialGouv/graal/commit/63c95e538efbe2fb8749789524d7f566c3e18b47))
* Text processing to remove stop words and plurals ([75e1db6](https://github.com/SocialGouv/graal/commit/75e1db629a3f9a9d81a45aab97e231082b76f19c))
* Text utils to normalize PLFSS text and extract plain text from HTML ([47674a6](https://github.com/SocialGouv/graal/commit/47674a6afa8ad9c1fb573dfd2934da7b58995f36))
* Transform "Supprimer l'article liminaire." into "Supprimer cet article" ([2d91de5](https://github.com/SocialGouv/graal/commit/2d91de5da2cfbc45e457c5fe5199b9eb40e10c38))
* Use a different similarity threshold for some specific Exposé amdt when finding similarities ([c5499be](https://github.com/SocialGouv/graal/commit/c5499be0fe4081aebfa9645363735416943778ab))
* Use a load balancer for summary generation between several clients ([b408014](https://github.com/SocialGouv/graal/commit/b408014864d44a1c2728dc85760f73e436e28baf))
* Use date_dernier_modif's timestamp instead of manually entering year ([6ed92e9](https://github.com/SocialGouv/graal/commit/6ed92e974d7b64297efdefb4393f2fefac07dda3))
* Use several clients for summary generation ([7f97602](https://github.com/SocialGouv/graal/commit/7f97602d0e5896c42516201ccec83dcea435e5db))
