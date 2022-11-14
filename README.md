# Commit Message

One page application that generates git commit messages based on the best practices

## Resources

| | |
|---|---|
| GitHub | [https://github.com/nvanlaerebeke/commit-message](https://github.com/nvanlaerebeke/commit-message)
| Public website | [https://commit.crazytje.com](https://commit.crazytje.com)
| Docker hub | https://hub.docker.com/r/crazytje/commit-message
| Helm chart example | [https://github.com/nvanlaerebeke/crazytje/tree/main/applications/charts/commit-message](https://github.com/nvanlaerebeke/crazytje/tree/main/applications/charts/commit-message)
---


## Best practices used 

The 'rules' followed are as follows:

- The subject starts with an icon describing the type of commit  
This can be for example a "bug" or "feature" etc
- The subject text is maximum 50 characters
- The subject line is automatically capitalized.
- Make sure to use the imperative mood in the subject line
- Do not end the subject line with a period
- A description with a max line length of 72 characters per line
- Extra/other resources like links to external resources or references
- Use the body to explain what and why vs. how  
- Can use multiple lines with "-" for bullet points in body


## Icons

Icon selection for the commit type can be:

The pre-pended icon can be selected from the following:

|   |   |   |
|---|---|---|
| :sparkles:            | feat      | (new feature) |
| :bug:                 | fix       | (bug fix) |
| :hammer:              | refactor  | (refactoring code) |
| :racehorse:           | perf      | (performance improvements) |
| :lock:                | sec       | (security improvements) |
| :art:                 | style     | (formatting, code style) |
| :books:               | docs      | (changes to documentation) |
| :white_check_mark:    | test      | (adding or refactoring tests) |
| :wrench:              | chore     | (updating tasks, configuration) |
| :speech_balloon:      | i18n      | (translation) |
| :tada:                | init      | (begin a project) |


## Building

To build a `Makefile` is included, run:

```
make build
```

Or manual:

```
docker build -t commit-message .
```

## Run the container

The containers exposes port 80, run the following docker command to run the commit-message container:

```
docker run --rm -ti -p 80:80 crazytje/commit-message 
```

## Kubernetes deployment

```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: commit-message
  name: commit-message
spec:
  selector:
    matchLabels:
      app: commit-message
  template:
    metadata:
      labels:
        app: commit-message
    spec:
      containers:
      - image: crazytje/commit-message:latest
        name: commit-message
        ports:
        - containerPort: 80
          name: commit-message    
```

An example helm chart with ingress and tls can be found here:

[https://github.com/nvanlaerebeke/crazytje/tree/main/applications/charts/commit-message](https://github.com/nvanlaerebeke/crazytje/tree/main/applications/charts/commit-message)