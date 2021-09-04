### 
docker run -dp 3000:3000 getting-started


### 创建持久化卷并挂载

```
docker volume create todo-db
docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started
docker volume inspect todo-db

[
    {
        "CreatedAt": "2019-09-26T02:18:36Z",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/todo-db/_data",
        "Name": "todo-db",
        "Options": {},
        "Scope": "local"
    }
]
```
