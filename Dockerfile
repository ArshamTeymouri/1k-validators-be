FROM node:18-slim AS builder
ARG MATRIX_TOKEN
ARG PACKAGE
ENV PACKAGE ${PACKAGE}
WORKDIR /code
COPY . .
RUN echo "building ${PACKAGE}... "; \
    yarn install; \
    echo "yarn install done. Building...." ; \
    yarn build; \
    echo "building ${PACKAGE} done."
CMD yarn run start:js:${PACKAGE}

