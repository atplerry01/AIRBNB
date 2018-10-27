# fullstack-graphql-airbnb-clone
A Fullstack GraphQL Airbnb Clone with React

## Road map

1. Website register/login
2. Deploy backend and frontend
3. App register/login
4. Website forgot password
5. Website create listing
6. Website view listings
7. Website chat
8. Feature requests

## Notes

- Typescript
- Ant Design


docker run -d -p 5432:5432 --name my-postgres -e POSTGRES_PASSWORD=Password@1 postgres
docker exec -it my-postgres bash
psql -U postgres
\l
CREATE DATABASE graphql_ts_server_boilerplate;
\q


docker run --name my-redis -d redis
docker run -d --name my-redis -p 6379:6379  -v /path/to/redisconf/redis.conf:/redis.conf redis redis-server /redis.conf

docker ps -a
docker rm --force my-postgres
docker rm --force my-redis
docker rm --force sad_mendeleev

docker container ls
docker-compose logs

# start the containers
docker-compose up
# shutdown the containers
docker-compose down

