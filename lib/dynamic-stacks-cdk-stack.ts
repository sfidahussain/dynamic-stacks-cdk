import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Service} from "./service";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as apigateway from "@aws-cdk/aws-apigateway";

export class DynamicStacksCdkStack extends Stack {
  constructor(scope: Construct, id: string, service: Service, props?: StackProps) {
    super(scope, id, props);
    const api = new apigateway.RestApi(this, 'books-api');

    api.root.addMethod('ANY');

    const books = api.root.addResource('books');
    books.addMethod('GET');
    books.addMethod('POST');

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DynamicStacksCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
