BasicDBObject query = new BasicDBObject();
query.put("priority", "highest");
DBCursor cursor = items.find(query);
// Print out "highest" priority items
while (cursor.hasNext()) {
    System.out.println(cursor.next());
}
