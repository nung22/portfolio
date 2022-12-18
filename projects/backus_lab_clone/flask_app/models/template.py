from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import insert_other_model_file
from pprint import pprint
DATABASE = "insert_database_name"

class Template:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.list_of_other_class_objects = []
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    # This method will return all instances of template objects
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM templates;"
        results = connectToMySQL(DATABASE).query_db(query)
        templates = []
        for template in results:
            templates.append( cls(template) )
        return templates
    
    # This method will create a new template object with given data
    @classmethod
    def save(cls, data):
        query = "INSERT INTO templates ( name, created_at, updated_at ) VALUES (%(name)s,NOW(),NOW());"
        return connectToMySQL(DATABASE).query_db(query, data)
    
    # This method will retrieve the specific template with all the other_class objects.
    @classmethod
    def get_template_by_id(cls , data):
        query = "SELECT * FROM templates LEFT JOIN favorites ON favorites.template_id = templates.id LEFT JOIN other_class ON favorites.other_class_id = other_class.id WHERE templates.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        template = cls( results[0] )
        for row in results:
            if row['other_class.id'] == None:
                break
            other_class_data = {
                    "id" : row["otherclass.id"],
                    "created_at" : row["other_class.created_at"],
                    "updated_at" : row["other_class.updated_at"]
            }
            template.list_of_other_class_objects.append( Other_class.other_class( other_class_data ) )
        return template
    
    # This method will create a new many-to-many relationship between two classes
    @classmethod
    def make_favorite(cls, data):
        query = "INSERT INTO favorites (template_id, other_class_id) VALUES (%(template_id)s, %(other_class_id)s);"
        return connectToMySQL(DATABASE).query_db(query, data)
    
    # This method will return all templates who are not in a many-to-many relationship with the other class
    @classmethod
    def have_not_favorited(cls, data):
        query = "SELECT * FROM templates WHERE templates.id NOT IN ( SELECT template_id FROM favorites WHERE other_class_id = %(id)s );"
        results = connectToMySQL(DATABASE).query_db(query, data)
        templates = []
        for row in results:
            templates.append(cls(row))
        return templates