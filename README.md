# Deno x GraphQL x Docker starter

## Description

This code aims to create a minimal starter that can be used to develop graphql API's using [deno](https://deno.land/) and [docker](https://www.docker.com/). It was created to offer an easy way to start writing some deno code, without having to worry about installing or importing anything.

For a deeper dive into Deno, check out the [Deno Manual](https://deno.land/manual@main/introduction)

The source code is all in `src/`:
- `src/server.ts` contains a basic deno http server, which listens on a port and endpoint configurable in `.env`, and forwards those requests to a graphQL API.
- `src/graph/` contains the graphQL API, starting in `src/graph/graph.ts` and importing the typedefs and resolvers
- `src/core/` contains business logic, which are imported into graphql resolvers (currently just a stub)

And the top level files:
- `docker-compose.yml` and `Dockerfile` configure the docker container that runs this deno app (the `Dockerfile` uses the official [denoland/deno](https://hub.docker.com/r/denoland/deno) image)
- `scripts.json` contains a config used by [denon](https://github.com/denosaurs/denon), which runs HMR inside the container. as the `docker-compose.yml` maps `src/` into a container volume, any change you make to the source code will mirror inside the container, which triggers `denon` to restart the server.
- `.vscode/settings.json` contains deno-runtime-specific settings for VS Code that will be enabled if you install the [denoland.vscode-deno](https://github.com/denoland/vscode_deno) VS Code plugin.

#### Configuring environment variables

The following environment variables are set, and can be configured:

| env var | value | description |
|:--------|:------|:------------|
| PORT | 3000 | what port the deno server runs on (if you change this, make sure you also change `docker-compose.yml:7`) |
| PLAYGROUND | true | enables/disables the GraphQL playground |
| ENDPOINT | graphql | what endpoint the server runs on |

Deno handles env vars using the [dotenv](https://deno.land/x/dotenv@v2.0.0) deno library

## Dependencies

- docker (all other dependencies are handled inside of docker)

## Local Development

- run `docker-compose up --build`.

After the docker container installs all of its bits, it should log `Deno GraphQL playground is running at http://localhost:3000/graphql`

## Deployment Steps

todo - at some stage i'll try and wrap this up in a CDK construct for a fargate service.