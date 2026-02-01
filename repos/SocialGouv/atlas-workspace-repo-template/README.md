# GitOps repository for workspaces

This repository was created automatically as part of an Atlas Workspace, and
serves as the desired state storage for resources requested by it.

Resources declared here are automatically synced to the Atlas control plane.

Note that this repository is intended to serve as an implementation detail: in
time, all modifications to it will be made either through the user portal or
through automation. Nevertheless, users are free to manipulate the repository
directly at their own responsiblity.

## Workspace resources

Workspace resources must be declared in the `resources/` directory.

Only resources belonging to the group `workspace.fabrique.social.gouv.fr` (e.g.
`DeploymentTarget`) are allowed inside, and those resources must exist in the
appropriate namespace of the workspace. We recommend not setting a namespace
explicitly by omitting the `metadata.namespace` field.

## Deployment Target resources

Deployment targets each have a dedicated folder in the `deployment-targets/`
directory. Inside those folders, the group restriction is lifted, to allow users
to deploy their application however they desire.

Be warned, though, that there are ongoing discussions regarding the creation of
app-specific CRDs in a new group (e.g. `apps.fabrique.social.gouv.fr`) and
restricting to only those. In the event this is implemented, arbitrary resources
will fail to sync.
