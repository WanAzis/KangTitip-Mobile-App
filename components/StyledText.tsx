import { Text, TextProps } from '../constants/Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
export function SegoeText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SegoeRegular' }]} />;
}
// export function MonoText(props: TextProps) {
//   return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
// }
// export function MonoText(props: TextProps) {
//   return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
// }
// export function MonoText(props: TextProps) {
//   return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
// }
