DB change:

- `yarn migration:generate migration/{migration_file_name}`
- `yarn migration:run`

Host:
- https://api.ethlas.readmost.kz/

Stack used:
- express, node
- typeorm as ORM
- postgres as db
- nginx as proxy
- traefik as dns back proxy
- docker for deploy


- For  cross-region support I would like to use AWS architecture:
- terraform for deployment CI/CD
- ECS for orchestration with ec2
- S3 for storage
- DynamoDB as db
- CloudWatch for monitoring
