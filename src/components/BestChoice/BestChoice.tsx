/*
 * @Date: 2023-10-18 17:01:47
 * @Description: BestRestaurants
 */
import { FC } from 'react';

import { Container } from './BestChoice.module';
export const BestChoice: FC = () => {
  return (
    <Container>
      <div></div>
      <div>
        <ul>
          <li>
            <span></span>
          </li>
          <li>
            <h1>Travelers' </h1>
            <h2>Choice Best of the Best 2023</h2>
          </li>
          <li>
            Every year, we award travelers’ favorite destinations, hotels, restaurants, and things
            to do around the world, based on reviews and ratings collected over the past 12 months.
            So our Travelers’ Choice Best of the Best winners are decided by you: real travelers
            from all over, sharing real opinions and stories. The 2023 winners are a celebration of
            everything we did last year—all the places we discovered and all the times we just said
            “yes” to new adventures. We'll reveal the winners by category throughout the year, so
            keep checking back for the latest. To learn more about how winners are chosen, visit our
            awards policy page.
          </li>
          <li>LEARN MORE</li>
        </ul>
      </div>
      <div></div>
    </Container>
  );
};
