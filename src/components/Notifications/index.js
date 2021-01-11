import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import es from 'date-fns/locale/es';
import api from '~/services/api';

import {
  Container,
  Badge,
  Notification,
  Scroll,
  NotificationList,
} from './styles';

function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');
      const data = response.data.map((notification) => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: es }
        ),
      }));
      setNotifications(data);
    }
    loadNotifications();
  }, []);
  return (
    <>
      <Container>
        <Badge onClick={handleToggleVisible} hasUnread>
          <MdNotifications color="#7159c9" size={20} />
        </Badge>

        <NotificationList visible={visible}>
          <Scroll>
            {notifications.map((notification) => (
              <Notification key={notification._id} unread={!notification.read}>
                <p>{notification.content}</p>
                <time>{notification.timeDistance}</time>
                <button type="button">marcar como verificado</button>
              </Notification>
            ))}
          </Scroll>
        </NotificationList>
      </Container>
    </>
  );
}

export default Notifications;
