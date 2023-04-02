import { Profile } from "./Profile/Profile";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from "data/user.json";
import data from "data/data.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Section title={'1 - Профиль социальной сети'}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
      </Section>

      
      <Section title={'2- Секция статистики'}>
        <Statistics title={"Upload stats"} stats={data} />
      </Section>

      
      <Section title={'2- Секция статистики / без заголовка'}>
          <Statistics stats={data} />
      </Section>

     
      <Section title={'3 - Список друзей'}>
          <FriendList friends={friends} />
      </Section>

      
      <Section title={'4 - История транзакций'}>
          <TransactionHistory items={transactions} />
      </Section>

    </div>
  );
};
