import { Task } from 'src/task/entities/task.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 100 })
  firstName: string;

  @Column('varchar', { length: 100 })
  lastName: string;

  @Column('smallint')
  age: number;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
