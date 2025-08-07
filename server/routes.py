from flask import Blueprint, request, jsonify
from db import get_connection

routes = Blueprint('routes', __name__)

@routes.route('/todos', methods=['GET'])
def get_todos():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM todos")
    todos = cursor.fetchall()
    conn.close()
    return jsonify(todos)

@routes.route('/todos', methods=['POST'])
def add_todo():
    data = request.get_json()
    title = data['title']
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO todos (title) VALUES (%s)", (title,))
    conn.commit()
    conn.close()
    return jsonify({"message": "Todo added"}), 201

@routes.route('/todos/<int:id>', methods=['PUT'])
def update_todo(id):
    data = request.get_json()
    completed = data['completed']
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE todos SET completed = %s WHERE id = %s", (completed, id))
    conn.commit()
    conn.close()
    return jsonify({"message": "Todo updated"})

@routes.route('/todos/<int:id>', methods=['DELETE'])
def delete_todo(id):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM todos WHERE id = %s", (id,))
    conn.commit()
    conn.close()
    return jsonify({"message": "Todo deleted"})
