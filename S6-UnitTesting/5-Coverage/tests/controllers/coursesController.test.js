const coursesController = require("../../src/controllers/coursesController");
const coursesModel = require("../../src/models/coursesModel");
jest.mock("../../src/models/coursesModel");


// Test get all courses


describe("Testing courses controller", () => {
    describe("Testing the getAllCourse function", () => {
        it("Should return all courses", ()=> {
            const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
            coursesModel.find.mockReturnValue(mockCourses);

            const result = coursesController.getAllCourse();
            expect(result).toBe(mockCourses);
            expect(coursesModel.find).toHaveBeenCalledTimes(1);
        });
    });
    
    // describe("Testing the deleteACourse function", () => {
    //     it("Should delete a course by id", ()=> {
    //         const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
    //         const responseAfterDeletion = [{ _id: "1", name: "Course 1" }]
    //         coursesModel.delete.mockReturnValue(responseAfterDeletion);

    //         const result = coursesController.deleteACourse(2);

    //         expect(result).toBe(responseAfterDeletion);
    //     });
    // })



    describe("Testing the getACourse function", () => {
        it("Should return a courses", ()=> {
            const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
            

            coursesModel.findById = jest.fn().mockImplementation((id) => {
                return mockCourses.filter(m => m._id == id)[0];
            })

            const result = coursesController.getACourse("1");
            expect(result).toBe(mockCourses[0]);
            expect(coursesModel.findById).toHaveBeenCalledTimes(1);
        });
    });



})


