import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  description: string;

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.tasks, { eager: true, onDelete: 'CASCADE' })
  user: User;
}
