import React, {useState} from 'react';

import './tab.scss';

const Tab = ({ children, tabList }) => {
	const [current, setCurrentTab] = useState(tabList[0].key);

	return (
		<div className="tab">
			<div className="tab-bar">
				{
					tabList.map((element) => {
						return (
							<div key={"Tab" + element.key} className={"tab-item" + (current === element.key ? " active" : "")} onClick={() => setCurrentTab(element.key)}>
								<span className="tab-title">{element.title}</span>
							</div>
						);
					})
				}
			</div>
			<div className="tab-content">
				{
					React.Children.map(children, child => {
						if (child.key === current)
							return child;
					})
				}
			</div>
		</div>
	);
}

export default Tab;