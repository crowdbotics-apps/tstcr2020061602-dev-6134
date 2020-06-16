import React from "react"
import { View } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input
} from "react-native-ui-kitten"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = { Toggle_33: true }

  render = () => (
    <View
      editableName="View15"
      style={{
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <View
        editableName="View16"
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          editableName="View17"
          style={{
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <View
            editableName="View19"
            style={{
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderStyle: "solid",
              backgroundSize: "auto"
            }}
          >
            <View
              editableName="View20"
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderStyle: "solid",
                backgroundSize: "auto"
              }}
            >
              <Text
                editableName="Text23"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
              >
                Name
              </Text>
              <Text
                editableName="Text22"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
              >
                Email
              </Text>
              <Text
                editableName="Text24"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
              >
                Subscribe?
              </Text>
            </View>
            <View
              editableName="View21"
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderStyle: "solid",
                backgroundSize: "auto"
              }}
            >
              <Text
                input
                placeholder="Text input placeholder"
                editable={true}
                value=""
                editableName="InputName"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
              />
              <Text
                input
                placeholder="Text input placeholder"
                editable={true}
                value=""
                editableName="InputEmail"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
              />
              <Toggle
                activeColor=""
                inactiveColor=""
                disabled={false}
                text=""
                editableName="ToggleSubscribe"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
                checked={this.state.Toggle_33}
                onChange={nextChecked =>
                  this.setState({ Toggle_33: nextChecked })
                }
              />
            </View>
          </View>
        </View>
        <View
          editableName="View18"
          style={{
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Button
            editableName="Button28"
            style={{
              overflow: "visible",
              textAlign: "center",
              verticalAlign: "baseline",
              fontFamily: "Impact",
              borderStyle: "solid",
              backgroundColor: "#ff9300"
            }}
            onPress={() => alert("Pressed!")}
          >
            Submit
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
