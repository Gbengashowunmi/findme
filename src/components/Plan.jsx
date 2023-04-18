import { Icon } from "@iconify/react";
import "./plan_component.scss";

export default function Plan({header, amount}) {
  return (
    <div className="plan">
      <h4>{header}</h4>
      <div className="plan_container">
        <h4>NGN {amount}</h4>
        <ul>
          <li>
            <Icon icon="fluent-mdl2:check-mark" color="#787878" />1 store Front
          </li>
          <li>
            <Icon icon="fluent-mdl2:check-mark" color="#787878" />
            Smart Dashboard
          </li>
          <li>
            <Icon icon="fluent-mdl2:check-mark" color="#787878" />
            Account
          </li>
          <li>
            <Icon icon="fluent-mdl2:check-mark" color="#787878" />
            Ad tool
          </li>
          <li>
            <Icon icon="fluent-mdl2:check-mark" color="#787878" />
            1month commission Free
          </li>
          <li>
            <Icon icon="fluent-mdl2:check-mark" color="#787878" />
            No monthly subscription
          </li>
        </ul>
          <button>Choose Standard</button>
      </div>
    </div>
  );
}
