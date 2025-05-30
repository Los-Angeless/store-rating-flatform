import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { User } from '../users/user.entity';
import { Store } from '../stores/store.entity';

@Entity()
@Unique(['user', 'store'])  // One rating per user-store pair
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  rating: number;  // 1 to 5

  @ManyToOne(() => User, (user) => user.ratings)
  user: User;

  @ManyToOne(() => Store, (store) => store.ratings)
  store: Store;
}
