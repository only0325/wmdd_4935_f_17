BasicDBObject findTestItemQuery = new BasicDBObject();
findTestItemQuery.put("task", "Test Code");
DBCursor testItemsCursor = items.find(findTestItemQuery);
if(testItemsCursor.hasNext()) {
    DBObject testCodeItem = testItemsCursor.next();
    testCodeItem.put("task", "Test and Review Code");
    items.save(testCodeItem);
}