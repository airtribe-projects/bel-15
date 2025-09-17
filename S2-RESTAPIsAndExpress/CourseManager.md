Assumption: We are just designing the APIs
Prefix: {PROTOCOL}://{HOST}:{PORT}/course-rating-service/v1/

Intent 1: Get all courses and its details

GET {prefix}/courses

Intent 2: Geat a course with an id
Ex: Get me a course whose id is 1234

GET {prefix}/courses/{id}


Intent 3: Create a course with course details

POST {prefix}/courses
body: {
    id: 
    ...
    ...
}

Intent 4: Modifies information of a course (course description, or anything else) 
PUT: Replacement (change the entire resource)
PATCH: Updates, changing partial information (some of the fields)

PATCH {prefix}/courses/{id} (Path Param), mandatory
body containing the changes
{

}


Intent 5: Get courses by their name
Ex: Give me all courses where name is "Software Engineering"
GET {prefix}/courses?name="Software Engineering"

Intent 5: Get me all students registered for a course

1. GET {prefix}/students?courseId=123
2. GET prefix/courses/{id}/students ==> Student is a sub resourse of course 










