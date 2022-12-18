from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.author import Author
from flask_app.models.book import Book

#! Redirect From Index To Authors Page
@app.route('/')
def index():
    return redirect('/authors')

#! Display All Authors
@app.route('/authors')
def authors():
    return render_template('authors.html', all_authors = Author.get_all())

#! Create New Author Object And Redirect To Authors Page
@app.route('/create_author',methods=['POST'])
def create_author():
    print(request.form)
    Author.save(request.form)
    return redirect('/authors')

#! Display All Of A Given Author's Favorite Books
@app.route('/authors/<int:id>')
def show_author(id):
    data = { 'id' : id }
    return render_template('author_show.html', author = Author.get_author_by_id(data), books_not_favorited = Book.not_favorited(data))

#! Add A New Book To A Given Author's Favorite List
@app.route('/add_favorite_book',methods=['POST'])
def add_favorite_book():
    data = {
    'author_id' : request.form['author_id'],
    'book_id' : request.form['book_id'] 
    }
    id = request.form['author_id']
    Author.make_favorite(data)
    return redirect(f'/authors/{id}')