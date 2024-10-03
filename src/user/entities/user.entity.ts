import { Task } from 'src/task/entities/task.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'The unique identifier for the user', default: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @Column('varchar', { length: 100 })
  @ApiProperty({ description: 'The first name of the user', maxLength: 100, default: 'Pedro', example: 'John' })
  firstName: string;

  @Column('varchar', { length: 100 })
  @ApiProperty({ description: 'The last name of the user', maxLength: 100, default: 'Villa', example: 'Doe' })
  lastName: string;

  @Column('smallint')
  @ApiProperty({ description: 'The age of the user', default: 25, example: 30 })
  age: number;

  @OneToMany(() => Task, (task) => task.user)
  @ApiProperty({ type: () => Task, isArray: true, description: 'The tasks assigned to the user', default: [], example: [{ id: '1', title: 'Task 1', description: 'First task' }] })
  tasks: Task[];
}
