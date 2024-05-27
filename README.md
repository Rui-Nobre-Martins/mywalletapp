# My Wallet App - Back-End

#Endpoints 

This app uses the following and methods:

# Users Table
[`POST /login`](#login)
[`GET /users`](#get-all-users)  
[`GET /users/:id`](#get-users-by-id)
[`POST /users/`](#add-users)
[`PUT /users/:id`](#update-users-by-id)
[`DELETE /users/:id`](#delete-users-by-id) 

### Request 
`POST /login`

Example POST body:
```
{
	"email": "ruitest@gmail.com",
	"password": "test"
}
```

### Request
`GET /users`

### Response
```
{
	"firstPage": null,
	"previous": null,
	"next": "null",
	"lastPage": "null,
	"countAllUsers": 25,
	"results": [
		{
			"id": 1,
			"username": "Rui",
			"email": "rui@gmail.com",
			"password": "password",
			"created_at": "2024-04-23T17:17:47.000Z",
			"updated_at": "2024-04-27T20:30:29.000Z"
		},
		{
			"id": 2,
			"username": "filipa ",
			"email": "filipa@hotmail.com",
			"password": "password",
			"created_at": "2024-04-23T17:46:18.000Z",
			"updated_at": "2024-04-23T17:46:29.000Z"
		},
		{
			"id": 3,
			"username": "helder",
			"email": "helder@iol.com",
			"password": "password",
			"created_at": "2024-04-23T17:47:48.000Z",
			"updated_at": "2024-04-23T17:47:48.000Z"
		},
		{
			"id": 4,
			"username": "fernando",
			"email": "fernando@gmail.com",
			"password": "password",
			"created_at": "2024-04-27T20:32:34.000Z",
			"updated_at": "2024-04-27T20:37:26.000Z"
		},
		{
			"id": 7,
			"username": "Isadora",
			"email": "Isadora@gmail.com",
			"password": "password",
			"created_at": "2024-04-29T19:15:41.000Z",
			"updated_at": "2024-04-29T19:15:41.000Z"
		}
	]
}
```

### Request
`GET /users/:id`

### Response
```
	{
	"id": 29,
	"username": "testla",
	"email": "testla@test.com",
	"password": "$argon2id$v=19$m=65536,t=3,p=4$46TFF1hpGNeWjMheNUeR1g$9FH5iFt2MY6G3Qxsuram1K2buMtDwQzvI3BoLSXR7yM"
}
```

### Request
`POST /users`
```
{
	"id": "",
	"username": "rui",
	"email": "rui@gmail.com",
	"password": "ruipassword"
}
```

### Request
`PUT /users/:id`
```
{
	"username": "rui",
	"email": "rui@gmail.com",
	"password": "$argon2id$v=19$m=65536,t=3,p=4$IKzvJOU8q2T+O7jwWQgvqQ$KH5fw+h+Zfcs22Hl4osdyLbwkBePhBZ9tIU/97lUBUY"
}
```

### Request
`DELETE /users/:id`
```
{
	"username": "rui",
	"email": "rui@gmail.com",
	"password": "rui"
}
```


# Transactions Table
[`GET /transactions`](#get-all-transactions)  
[`GET /transactions/:user_id`](#get-transactions-by-id)
[`POST /transactions`](#add-transactions)
[`PUT /transactions/:id`](#update-transactions-by-id)
[`DELETE /transactions/:id`](#delete-transactions-by-id)


### Request
`GET /transactions`

### Response
```
{
	"firstPage": null,
	"previous": null,
	"next": null,
	"lastPage": null,
	"countAllTransactions": 24,
	"results": [
		{
			"id": 1,
			"user_id": 1,
			"amount": "100.00",
			"description": "income",
			"created_at": "2024-04-23T17:45:48.000Z",
			"updated_at": "2024-04-23T17:45:48.000Z"
		},
		{
			"id": 2,
			"user_id": 3,
			"amount": "200.00",
			"description": "income",
			"created_at": "2024-04-23T17:47:21.000Z",
			"updated_at": "2024-04-28T19:21:45.000Z"
		},
		{
			"id": 3,
			"user_id": 2,
			"amount": "300.00",
			"description": "income",
			"created_at": "2024-04-23T17:48:12.000Z",
			"updated_at": "2024-04-28T19:21:48.000Z"
		},
		{
			"id": 4,
			"user_id": 1,
			"amount": "1000.00",
			"description": null,
			"created_at": "2024-04-29T17:39:57.000Z",
			"updated_at": "2024-04-29T17:39:57.000Z"
		},
		{
			"id": 10,
			"user_id": 1,
			"amount": "1500.00",
			"description": "new income",
			"created_at": "2024-04-29T20:52:23.000Z",
			"updated_at": "2024-04-29T20:52:23.000Z"
		}
	]
}
```

### Request
`GET /transactions/:id`

### Response
```
{
	"totalBalance": -6,
	"transactions": [
		{
			"id": 62,
			"user_id": 2,
			"amount": "-5.00",
			"description": "despesa",
			"created_at": "2024-05-10T21:02:24.000Z",
			"updated_at": "2024-05-10T21:02:24.000Z"
		},
		{
			"id": 61,
			"user_id": 2,
			"amount": "-2801.00",
			"description": "despesa",
			"created_at": "2024-05-10T21:01:47.000Z",
			"updated_at": "2024-05-10T21:01:47.000Z"
		},
		{
			"id": 11,
			"user_id": 2,
			"amount": "2500.00",
			"description": "new income",
			"created_at": "2024-04-29T20:53:14.000Z",
			"updated_at": "2024-04-29T21:18:12.000Z"
		},
		{
			"id": 3,
			"user_id": 2,
			"amount": "300.00",
			"description": "income",
			"created_at": "2024-04-23T17:48:12.000Z",
			"updated_at": "2024-04-28T19:21:48.000Z"
		}
	]
}
```

### Request
`POST /transactions`

```
{
	"user_id": "22",
	"amount": "1",
	"description": "income"
}
```

### Request 
`PUT /transactions/:id`

```
{
	"amount": "2",
	"description": "income."
}
```

### Request 
`DELETE /transactions/:id`

```
{
	"amount": "2",
	"description": "income."
}
```









