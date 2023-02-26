# Mapacen.pl
3rd year 5th semester Computer Science - Software Engineering project.
Regional price comparison web application.

## Technologies
* .NET 6.0 WebAPI
* Entity Framework Core 6.0
* MS SQL Server
* Angular 14

## Overview
Once you enter the site, you can create a new account or log in to existing one.
Validation of the input data is implemented in both frontend and backend. For example, email and password must match a regex. Moreover, account will not be created if the input email already exists in the database.

![registration](https://i.postimg.cc/GmNrhLB0/rejestracja.png)

If the registration and logging in is successful, the following view will be shown:

![main_view](https://i.postimg.cc/CKXjNqzv/po-Zalogowaniu.png)

You can search for a product by name:

![search_by_name](https://i.postimg.cc/HxmLdYKY/wyszukiwanie-Po-Nazwie.png)

Searching for a product by category name only:

![category](https://i.postimg.cc/zBc7MG0B/zmiana-Kategorii.png)

Once you click an offer, full address of a sales point will show up. There is also a comment section where you can write your own comment or like/dislike someone else's comment. You can also add an offer to favourites by hitting the heart button. It is worth mentioning that there is no way to like/dislike a comment more than once. Backend creators considered this case.

![comment](https://i.postimg.cc/yNbwyvmw/komentowanie-ILikowanie.png)

It is inefficient to fetch all the offers from the database at once, so in order to avoid this, the pagination of results is implemented.

![paging](https://i.postimg.cc/gJBB3Dhn/zmiana-Strony.png)

If an administrator is logged in, there are new features available. They can remove a comment or ban an user. Banned user cannot comment on an offer and their all comments are deleted.

![delete_comment_by_admin](https://i.postimg.cc/vTh7W8kX/admin-Usuwanie-Komentarza-IBlokowanie.png)

There is also a seperate section for administrators only. This is the place where products, categories, sales points and offers are added/modified/deleted and where users can be unbanned.

![admin_section](https://i.postimg.cc/gjzt97PS/panel-Admina-Wybor.png)

Adding a new product: (any image can be uploaded, it will be resized in backend)

![adding_product](https://i.postimg.cc/J0hw30tz/panel-Admina-Dodawanie-Produktu.png)

## Database diagram

![database](https://i.postimg.cc/zGxxW7KK/schemat-Bazy.png)

# Division of tasks:

## Backend:
- Mateusz - https://github.com/matebab551
- Janek - https://github.com/PanJan44

## Frontend:
- Filip - https://github.com/corosto
- Karol - https://github.com/my-memory-leaked
- Dominik - https://github.com/DominikBarys

## Design:
- Wiktor - https://github.com/wm1511
