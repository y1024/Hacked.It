# https://github.com/facebook/react-native/issues/5839#issuecomment-389125425
sed -i '' 's/\[super beginRefreshing\];/\[super beginRefreshing\];\
\[super sendActionsForControlEvents:UIControlEventValueChanged\];/' \
./node_modules/react-native/React/Views/RCTRefreshControl.m