import Event from './Event';

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event='Statue of Liberty🗽' color='purple' location='Battery Park' />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Coffee SoHo ☕" color="purple" location="SoHo" />
            <td></td>
          </tr>

          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="NY Public Library 📚" color="blue" location="5th Ave" />
            <td></td>
            <td></td>
            <Event event="Williamsburg Walk" color="blue" location="Brooklyn" />
          </tr>

          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <Event event="SoHo Shopping 🛍" color="pink" location="SoHo" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Pizza Lunch 🍕" color="purple" location="Joe's Pizza" />
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Rockefeller Center" color="blue" location="Midtown" />
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <Event event="Chelsea Market 🍪" color="purple" location="Chelsea" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Sunset Ferry 🌅" color="blue" location="East River" />
          </tr>

          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Rooftop Dinner 🌇" color="purple" location="Manhattan" />
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;