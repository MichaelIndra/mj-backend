import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber } from "class-validator"
import { Employee } from "src/employee/entities/employee.entity"

export class CreateAttendanceDto {
    @ApiProperty()
    employee: Employee
    
    @ApiProperty()
    attendance_date ?: Date
    
    @ApiProperty()
    // @IsNumber()
    attendance_type ?: number
    
    @ApiProperty()
    time_check_in ?: Date
    
    @ApiProperty()
    time_check_out ?: Date
    
    @ApiProperty()
    time_start_for_break ?: Date
    
    @ApiProperty()
    time_end_for_break ?: Date
    
    @ApiProperty()
    time_start_for_left ?: Date
    
    @ApiProperty()
    time_end_for_left ?: Date
    
    @ApiProperty()
    time_arrive_home ?: Date
    
    @ApiProperty()
    // @IsNumber()
    overtime ?: number
    
    @ApiProperty()
    // @IsNumber()
    work_duration ?: number
    
    @ApiProperty()
    // @IsNumber()
    early_overtime ?: number
    
    @ApiProperty()
    // @IsNumber()
    total_leave ?: string
    
    @ApiProperty()
    week_of_day ?: number
    
    @ApiProperty({description : '1 = ya, 0 = tidak'})
    isOvertime ?: number
    
    @ApiProperty({description : '1 = ya, 0 = tidak'})
    is_early_overtime ?: number
}
export class CreateManyAttendanceDto{
    @ApiProperty()
    @IsNotEmpty({ always: true })
    bulk: CreateAttendanceDto[];
}