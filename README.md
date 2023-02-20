# Mapacen.pl
3rd year 5th semester Computer Science - Software Engineering project.
Regional price comparison web application.

## Technologies
* .NET 6.0 WebAPI
* Entity Framework Core 6.0
* Angular 14

## Overview
Once you enter the site, you can create a new account or log in to existing one.
Validation of input data is implemented in both frontend and backend layers. For example, email and password must match a regex. Moreover, account will not be created if input email already exists in the database.

![registration](https://i.postimg.cc/GmNrhLB0/rejestracja.png)

If registration and logging in is successful, the following view will be showed:

![main_view](https://i.postimg.cc/CKXjNqzv/po-Zalogowaniu.png)

You can search for a product by name:

![search_by_name](https://i.postimg.cc/HxmLdYKY/wyszukiwanie-Po-Nazwie.png)

Once you click an offer, full address of a sales point will show up. There is also a comment section where you can write your own comment or like/dislike someone else's comment. You can also add an offer to favourites section by hitting the heart button. It is worth mentioning that there is no way to like/dislike a comment more than once. Backend creators considered this case.

![comment](https://i.postimg.cc/yNbwyvmw/komentowanie-ILikowanie.png)

It is inefficient to fetch all the offers from the database at once, so in order to avoid this, the pagination of results is implemented.

![comment](https://i.postimg.cc/gJBB3Dhn/zmiana-Strony.png)

If an administrator is logged in, there are new features available. They can remove a comment or ban an user.

![comment](https://i.postimg.cc/vTh7W8kX/admin-Usuwanie-Komentarza-IBlokowanie.png)

# Division of tasks:

## Frontend:
- Filip - https://github.com/corosto
- Karol - https://github.com/my-memory-leaked
- Dominik - https://github.com/DominikBarys

## Backend:
- Mateusz - https://github.com/matebab551
- Janek - https://github.com/PanJan44

## Designer:
- Wiktor - https://github.com/wm1511

**Copyright (C) 2023**
**All rights reserved.**
