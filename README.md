# Individuell inlämning Airbean API

## Lathund

### Rekommenderat arbetsflöde
* Signup
  - I request: {"username": "fabiola", "password": "123"
* Login (för att få token)
  - I request: {"username": "fabiola", "password": "123"
* Products (add, update, remove)
  - I request (add): {"id": "VigH7JYicNUJI4Ue", "title": "Fabiola Special", "desc": "Det enda du behöver", "price": 150}
  - I request (update): {"_id": "id från databas", "properties": {"desc": "Det enda du faktiskt behöver", "price":"180"}}
  - I request (remove): {"_id": "id från databas"}
- Campaigns
  - I request: {"products": [{"_id": "vHG2dE13fD4Q0QQb"}, {"_id": "ptcNWSgkjwBvpBtN"}], "price": 100}

!! Alla routes (products och campaigns) kräver validering med token. Välj "Bearer Token" under fliken "Auth" i Insomnia. Klistra in din token.
