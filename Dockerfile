FROM node:14-buster-slim as build

WORKDIR /home/node/app
USER root

ENV BUILD_DEPS="build-essential ca-certificates git-core openssl python-dev" 

RUN apt-get update && \
    apt-get install -y --no-install-recommends $BUILD_DEPS

COPY . .

# ENV RAZZLE_PUBLIC_PATH=VOLTO_PUBLIC_PATH
ENV RAZZLE_API_PATH=VOLTO_API_PATH
ENV RAZZLE_INTERNAL_API_PATH=VOLTO_INTERNAL_API_PATH
# ENV RAZZLE_RECAPTCHA_KEY=VOLTO_RECAPTCHA_KEY
# ENV RAZZLE_GA_CODE=VOLTO_GA_CODE
# ENV SENTRY_DSN=VOLTO_SENTRY_DSN
ARG FONTAWESOME_NPM_AUTH_TOKEN
ENV FONTAWESOME_NPM_AUTH_TOKEN "$FONTAWESOME_NPM_AUTH_TOKEN"

RUN yarn policies set-version 1.19.1 && \
    yarn config set network-timeout 600000 -g && \
    yarn --frozen-lockfile && \
    yarn build && \
    rm -rf /home/node/.cache && \
    apt-get purge $BUILD_DEPS -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

FROM node:14-buster-slim

WORKDIR /home/node/app
COPY --chown=node --from=build /home/node/app /home/node/app

EXPOSE 3000 3001 4000 4001
ENTRYPOINT ["/home/node/app/entrypoint.sh"]
CMD ["yarn", "start:prod"]
