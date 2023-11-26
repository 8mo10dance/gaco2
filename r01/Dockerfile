FROM public.ecr.aws/lambda/python:3.7

RUN pip install numpy

COPY index.py ${LAMBDA_TASK_ROOT}

CMD [ "index.handler" ]
