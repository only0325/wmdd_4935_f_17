BasicDBObject deleteQuery = new BasicDBObject();
deleteQuery.put("priority", "highest");
DBCursor cursor = items.find(deleteQuery);
while (cursor.hasNext()) {
    DBObject item = cursor.next();
    items.remove(item);
}