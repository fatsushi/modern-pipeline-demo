import json

def lambda_handler(event, context):
    return json.dumps({'message':'Hello from SAM and the CDK!'})