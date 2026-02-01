# GitOps repository for organizations

This repository was created automatically as part of an Atlas Organization, and
serves as the desired state storage for resources requested by it.

Resources declared here are automatically synced to the Atlas control plane.

Note that this repository is intended to serve as an implementation detail: in
time, all modifications to it will be made either through the user portal or
through automation. Nevertheless, users are free to manipulate the repository
directly at their own responsiblity.

## Restrictions

Resources must be declared in the `resources/` directory.

Only resources belonging to the group `org.fabrique.social.gouv.fr` (e.g.
`Workspace`) are allowed, and those resources must exist in the appropriate
namespace of the organization. We recommend not setting a namespace explicitly
by omitting the `metadata.namespace` field.
