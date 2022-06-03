# user:
### model:
- name
- username
- email
- password
- role: 'admin' | 'professeur'
### service:
- getMe() [protected]
- createUser({args...}) : Professeur [protected, restricted to admin]
- updateUser({name, username}) : Professeur [protected]
- chagnePassowrd(...)

# reservations:
### model:

### service:
- 
