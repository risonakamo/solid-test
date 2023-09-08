from os.path import dirname,realpath,join
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

HERE=dirname(realpath(__file__))

app=FastAPI()

app.mount("/",StaticFiles(
    directory=join(HERE,"../build"),
    html=True
),name="root")
