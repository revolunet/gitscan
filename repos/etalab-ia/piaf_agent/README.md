# piafagent

Frontend application to be plugged to a Question-answering backend ([like this one](https://github.com/deepset-ai/haystack)). It is a search bar, displaying  answers after you press "Search".  

Note: the text is currently in french, but can easily be adapted to any other language.  

## Project setup

```
npm install
```

## Project run

### Compiles and hot-reloads for development

```
npm run serve
```

![search](/public/search_bar.png)

![answers](/public/answers.png)

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Run with docker

A Dockerfile for running your app in production is already prepared. You only have to build the image and run it, typing :

```bash
docker build -t piafagent_image .
docker run -d -p 8081:80 --name piafagent piafagent_image
```

Note: the 8081 port will of course depend on your nginx / apache configuration.

## Project Configuration

Create a file in `public/clients/` (you can copy any file from this directory) and edit the parameters

* `API_URL`: endpoint you want this app to talk to
* `FILTERS`: If you want filters, it must follow this format:

```json
{
  "FILTERS": {
    "version": "1.0",
    "data": [
      {
        "id": "id",
        "type": "type",
        "name": "name",
        "data": []
      }
    ]
  }
}
```

* `DISPLAY_NAME`: Name to be displayed in the title
* `DISPLAY_DESCRIPTION`: Description of the service provided
* `DISPLAY_TITLES`: Do you want the title of your answers to be displayed (only if you added a title to your
  paragraphs)   
*  `TAGNAME` : Do you want tags to be displayed on the top right of the answer block, and which property should it be  
* `ALLOW_FEEDBACK`: Do you want to allow users to give feedbacks
* `EXAMPLE_QUESTION`: The question serving as example in the Homepage  
* `DISPLAY_PROBABILITIES`: boolean for if you want to display the probability associated with the document
* `MATOMO`: your matomo configuration object: server (like "https://matomo.example.com") and site Id
* `AUTOCOMPLETE_QUESTIONS`: Help users by autocompleting questions:
```json
{
  "AUTOCOMPLETE_QUESTIONS": {
    "activate": true,
    "questions": [
      "How can I use this tool?",
      "What is my purpose?"
    ]
  }
}
```
  * The questions can be retrieved from the squad.json associated to a client (see fill_questions.sh)

![search](/public/filters.png)
