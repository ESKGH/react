export const Alerts = () => {
    const items = [
        { icon: '✅', text: 'Lorem Ipsum 1' },
        { icon: '❌', text: 'Lorem Ipsum 2' },
        { icon: '⚠️', text: 'Lorem Ipsum 3' },
        { icon: '✨', text: 'Lorem Ipsum 4' },
        { icon: '🔔', text: 'Lorem Ipsum 5' },
      ];
    
      return (
        <ul className="alert-list">
          {items.map((item, index) => (
            <li className="alert-item" key={index}>
              <span>{item.icon}</span> {item.text}
            </li>
          ))}
        </ul>
      );
    }
