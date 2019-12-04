# famous-peeps

A sample application for AWS re:Invent 2019 sessions with Amazon ECR.

## Dev environment setup

You will need [node.js](https://nodejs.org/en/), version 10.3.+ or higher, and [Docker](https://www.docker.com/get-started)

Then, [Install](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) the AWS CLI and [Configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) it.  To get going quickly, use an administrator (but not root!) IAM account.

FInally, install the [AWS CDK](https://github.com/aws/aws-cdk)
```
npm install -g aws-cdk
```

## Run the app locally

Clone the [repo](https://github.com/omieomye/famous-peeps) from Github, then set up the app's dependencies from its root folder
```
famous-peeps$ npm install
```

Test it out, make sure the tests pass and then quit the test scaffold
```
famous-peeps$ npm run test
```

Start it locally and after its up, open a web browser and go to http://localhost:3000/health, http://localhost:3000 and http://localhost:3000/movies
```
famous-peeps$ npm run dev
```

## Build and run your container image

```
famous-peeps$ docker build -t docker-famous-peeps:latest .
```
```
famous-peeps$ docker run --init -i -p 3000:3000 docker-famous-peeps:latest
```

## Create and configure your AWS infrastructure

*Caution: Delete your AWS resources after you are done with the demo so you don't incur additional charges.*

Create the AWS resources to deploy this app to.  This assumes you have configured the AWS CLI with an administrator IAM user and chosen your default Region.
```
famous-peeps$ npm run deploy
```

Now,
1) Log into your AWS console, go to ECR and enable scan on push for your newly created Repository
2) 

## References

[YouTube video on an ECR getting started](https://www.youtube.com/watch?v=29WbHPDyRIs)

[AWS Fargate CDK sample](https://docs.aws.amazon.com/cdk/latest/guide/ecs_example.html)

[A comprehensive serveless application demo in AWS](https://github.com/aws-samples/aws-cdk-changelogs-demo)

ECR Image Scanning: Rescan [Code](https://github.com/aws-samples/amazon-ecr-continuous-scan) and [blog](https://aws.amazon.com/blogs/containers/amazon-ecr-native-container-image-scanning/)