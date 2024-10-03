import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6', description: 'The unique identifier of the task', default: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6' })
  id: string;

  @Column('varchar', { length: 255 })
  @ApiProperty({ example: 'Task Title', description: 'The title of the task', default: 'Task Title' })
  title: string;

  @Column('varchar', { length: 750 })
  @ApiProperty({ example: 'This is a detailed description of the task.', description: 'The description of the task', default: 'This is a detailed description of the task.' })
  description: string;

  @Column({ default: false })
  @ApiProperty({ example: false, description: 'The completion status of the task', default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.tasks, { eager: true, onDelete: 'CASCADE' })
  @ApiProperty({ type: () => User, description: 'The user associated with the task' })
  user: User;
}
