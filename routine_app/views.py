# backend_app/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .schedule import Schedule
from .data import Courses, Resources
from .serializers import FileSerializer

class RoutineGenerationAPIView(APIView):
    def post(self, request):
        serializer = FileSerializer(data=request.data)
        if serializer.is_valid():
            input_data = serializer.validated_data
            
            # Call your algorithm function
            faculty_details = input_data['facultyFile']
            course_details = input_data['courseFile']
            room_details = input_data['sectionFile']
            section_data = input_data['roomFile']
            #no_of_days = input_data['no_of_days']
            #no_of_slots = input_data['no_of_slots']
            routine_path = "C:/Users/DIPANJAN/Downloads/RoutineGeneration2.0-master/RoutineGeneration2.0-master/routine_app/routines.xlsx"
            new_semester = Courses(course_details)
            
            resource_data = Resources(teacher_data_file=faculty_details,
                              room_data_file=room_details,
                              section_data_file=section_data)
            resource_data.reset_resources()
            s = Schedule(new_semester, resource_data)
            s.create_classes()
            s.generate()
            routine = s.save_schedule(routine_path)
            print(routine)
            #s.display()
            #s.save_schedule(routine_path)
            return Response(routine, status=200)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=400)
